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
    <div className="container mx-auto grid min-h-screen items-center">
      {gameState === GameState.NewGame ? (
        <StartGameMenu />
      ) : (
        <>
          <GameOverModal />
          <BoardHeader />
          <Board />
          <BoardFooter />
        </>
      )}
    </div>
  );
}

export default App;
