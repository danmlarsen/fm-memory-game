import { AnimatePresence, motion } from "motion/react";
import { useAppSelector } from "./store/hooks";
import { GameState } from "./store/memoryGameSlice";

import Board from "./components/Board";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import GameOverModal from "./components/GameOverModal";
import StartGameMenu from "./components/StartGameMenu";

function App() {
  const { gameState } = useAppSelector((state) => state.memoryGame);

  return (
    <AnimatePresence mode="wait">
      {gameState === GameState.NewGame ? (
        <motion.div
          key="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid min-h-screen place-items-center bg-secondary-900 px-6"
        >
          <StartGameMenu />
        </motion.div>
      ) : (
        <motion.div
          key="Game"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mx-auto grid min-h-screen max-w-[69.375rem] grid-rows-[auto_1fr_auto] px-6 py-6 md:px-10 md:py-10 lg:px-0 lg:pb-[2.1875rem] lg:pt-[4.1875rem]"
        >
          <GameOverModal />
          <BoardHeader />
          <main className="grid place-items-center py-4 md:py-10 lg:py-16">
            <Board />
          </main>
          <BoardFooter />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
