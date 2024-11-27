import { formatTime } from "../utils/utils";

type AppProps = {
  numMoves: number;
  startTime: number;
  stopTime: number;
};

export default function GameOverSolo({
  numMoves,
  startTime,
  stopTime,
}: AppProps) {
  const elapsed = Math.floor((stopTime - startTime) / 1000);

  return (
    <>
      <div className="space-y-2 text-center md:space-y-4">
        <h2 className="text-2xl text-secondary-900 md:text-5xl">You did it!</h2>
        <p className="md:text-lg">Game over! Here's how you got on...</p>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center justify-between rounded-sm bg-secondary-100 p-4">
          <span className="text-[0.8125rem] md:text-lg">Time Elapsed</span>
          <span className="text-xl text-secondary-900 md:text-[2rem] md:leading-10">
            {formatTime(elapsed)}
          </span>
        </li>
        <li className="flex items-center justify-between rounded-sm bg-secondary-100 p-4">
          <span className="text-[0.8125rem] md:text-lg">Moves Taken</span>
          <span className="text-xl text-secondary-900 md:text-[2rem] md:leading-10">
            {numMoves} Moves
          </span>
        </li>
      </ul>
    </>
  );
}
