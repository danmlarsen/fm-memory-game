import { useAppDispatch, useAppSelector } from "../store/hooks";
import { newGame, restartGame } from "../store/memoryGameSlice";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { generateBoard } from "../utils/utils";

export default function BoardHeader() {
  const { gridSize } = useAppSelector((state) => state.memoryGame);
  const dispatch = useAppDispatch();

  function handleRestart() {
    const newBoard = generateBoard(gridSize);
    dispatch(
      restartGame({
        boardState: newBoard,
      }),
    );
  }

  return (
    <header className="flex items-center justify-between">
      <Logo />
      <div className="flex gap-4">
        <Button onClick={handleRestart}>Restart</Button>
        <Button type="secondary" onClick={() => dispatch(newGame())}>
          New Game
        </Button>
      </div>
    </header>
  );
}
