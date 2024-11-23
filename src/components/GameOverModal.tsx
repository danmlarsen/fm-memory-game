import { useAppDispatch, useAppSelector } from "../store/hooks";
import { newGame, selectIsSolo } from "../store/memoryGameSlice";
import Button from "../ui/Button";
import GameOverMultiplayer from "./GameOverMultiplayer";
import GameOverSolo from "./GameOverSolo";

export default function GameOverModal() {
  const isSolo = useAppSelector(selectIsSolo);
  const dispatch = useAppDispatch();

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6">
      <div className="w-full max-w-2xl space-y-6 rounded-sm bg-gray-50 p-6 text-sm text-secondary-400">
        {isSolo ? <GameOverSolo /> : <GameOverMultiplayer />}
        <div className="flex flex-col gap-4 md:flex-row">
          <Button size="big" type="primary" onClick={() => dispatch(newGame())}>
            Restart
          </Button>
          <Button
            size="big"
            type="secondary"
            onClick={() => dispatch(newGame())}
          >
            Setup New Game
          </Button>
        </div>
      </div>
    </div>
  );
}
