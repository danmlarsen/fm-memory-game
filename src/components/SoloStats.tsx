import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { formatTime } from "../utils/utils";

export default function SoloStats() {
  const { numMoves, startTime, stopTime } = useAppSelector(
    (state) => state.memoryGame,
  );

  const [elapsedTime, setElapsedTime] = useState(0);
  const interval = useRef(0);

  useEffect(() => {
    if (stopTime > 0 && interval.current !== 0) {
      clearInterval(interval.current);
      interval.current = 0;
    }

    if (stopTime === 0 && interval.current === 0) {
      setElapsedTime(0);
      interval.current = setInterval(() => {
        const now = performance.now();
        const elapsed = Math.floor((now - startTime) / 1000);
        setElapsedTime(elapsed);
      }, 1000);
    }

    return () => {
      if (interval.current !== 0) {
        clearInterval(interval.current);
        interval.current = 0;
      }
    };
  }, [startTime, stopTime]);

  return (
    <div className="mx-auto grid w-full max-w-[540px] grid-cols-[repeat(2,1fr)] justify-center gap-[30px]">
      <StatsBox name="Time" data={formatTime(elapsedTime)} />
      <StatsBox name="Moves" data={numMoves} />
    </div>
  );
}

function StatsBox({ name, data }: { name: string; data: string | number }) {
  return (
    <div className="bg-secondary-100 flex flex-col items-center justify-between rounded-sm px-5 py-6 md:flex-row">
      <div className="text-[15px] text-secondary-400 md:text-lg">{name}</div>
      <div className="text-2xl tabular-nums text-secondary-700 md:text-[32px]">
        {data}
      </div>
    </div>
  );
}
