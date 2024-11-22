import { useAppSelector } from "../store/hooks";
import { selectIsSolo } from "../store/memoryGameSlice";
import GameOverMultiplayer from "./GameOverMultiplayer";

export default function GameOverModal() {
  const { isSolo } = useAppSelector(selectIsSolo);

  const elapsed = 126;
  const moves = 39;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50">
      <div className="w-full max-w-2xl space-y-6 rounded-md bg-gray-50 p-6 text-secondary-700">
        {isSolo ? "Solo score" : <GameOverMultiplayer />}
      </div>
    </div>
  );
}
