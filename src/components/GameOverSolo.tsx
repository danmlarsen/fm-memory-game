import { useAppSelector } from "../store/hooks";

export default function GameOverSolo() {
  const { numMoves, startTime, stopTime } = useAppSelector(
    (state) => state.memoryGame,
  );

  const elapsed = Math.floor((stopTime - startTime) / 1000);

  return (
    <>
      <div className="space-y-2 text-center">
        <h2 className="text-secondary-900">You did it!</h2>
        <p>Game over! Here's how you got on...</p>
      </div>
      <ul className="space-y-2">
        <li className="bg-secondary-100 flex items-center justify-between rounded-sm p-4">
          <span>Time elapsed</span>
          <span className="text-xl text-secondary-900">{elapsed}</span>
        </li>
        <li className="bg-secondary-100 flex items-center justify-between rounded-sm p-4">
          <span>Moves Taken</span>
          <span className="text-xl text-secondary-900">{numMoves} Moves</span>
        </li>
      </ul>
    </>
  );
}
