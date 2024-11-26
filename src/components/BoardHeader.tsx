import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { newGame, restartGame } from "../store/memoryGameSlice";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import BoardHeaderGameMenu from "./BoardHeaderGameMenu";

export default function BoardHeader() {
  const dispatch = useAppDispatch();

  const [menuOpen, setMenuOpen] = useState(false);

  function handleRestart() {
    if (menuOpen) setMenuOpen(false);
    dispatch(restartGame());
  }

  return (
    <>
      {menuOpen && (
        <BoardHeaderGameMenu
          onNewGame={() => dispatch(newGame())}
          onRestart={handleRestart}
          onResume={() => setMenuOpen(false)}
        />
      )}
      <header className="flex items-center justify-between">
        <Logo />
        <div className="hidden gap-4 sm:flex">
          <Button onClick={handleRestart}>Restart</Button>
          <Button type="secondary" onClick={() => dispatch(newGame())}>
            New Game
          </Button>
        </div>
        <div className="sm:hidden">
          <Button onClick={() => setMenuOpen(true)}>Menu</Button>
        </div>
      </header>
    </>
  );
}
