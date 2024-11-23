import Board from "./components/Board";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import GameOverModal from "./components/GameOverModal";
import StartGameMenu from "./components/StartGameMenu";
import { useAppSelector } from "./store/hooks";
import { GameState } from "./store/memoryGameSlice";

function App() {
  const { gameState } = useAppSelector((state) => state.memoryGame);

  return (
    <div>
      {gameState === GameState.NewGame ? (
        <StartGameMenu />
      ) : (
        <div className="grid min-h-screen grid-rows-[auto_1fr_auto] p-6">
          {gameState === GameState.GameOver && <GameOverModal />}
          <BoardHeader />
          <main className="grid place-items-center py-4">
            <Board />
          </main>
          <BoardFooter />
        </div>
      )}
    </div>
  );
}

export default App;
