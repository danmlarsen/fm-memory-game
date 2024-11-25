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
        <div className="mx-auto grid min-h-screen max-w-[1110px] grid-rows-[auto_1fr_auto] px-6 py-6 lg:px-0">
          {gameState === GameState.GameOver && <GameOverModal />}
          <BoardHeader />
          <main className="grid place-items-center py-4 md:py-10">
            <Board />
          </main>
          <BoardFooter />
        </div>
      )}
    </div>
  );
}

export default App;
