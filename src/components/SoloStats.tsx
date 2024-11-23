import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { formatTime } from "../utils/utils";

export default function SoloStats() {
  const { numMoves, startTime, stopTime } = useAppSelector(
    (state) => state.memoryGame,
  );

  const [elapsedTime, setElapsedTime] = useState(0);
  const interval = useRef(-1);

  useEffect(() => {
    if (stopTime > 0) {
      clearInterval(interval.current);
    } else {
      setElapsedTime(0);
      interval.current = setInterval(() => {
        const now = performance.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        setElapsedTime(elapsed);
      }, 1000);
    }

    return () => clearInterval(interval.current);
  }, [startTime, stopTime]);

  return (
    <div className="mx-auto grid w-full grid-cols-2 gap-8">
      <StatsBox name="Time" data={formatTime(elapsedTime)} />
      <StatsBox name="Moves" data={numMoves} />
    </div>
  );
}

function StatsBox({ name, data }: { name: string; data: string | number }) {
  return (
    <div className="bg-secondary-100 flex items-center justify-between rounded-sm px-5 py-6">
      <div className="text-secondary-400">{name}</div>
      <div className="text-secondary-700">{data}</div>
    </div>
  );
}
