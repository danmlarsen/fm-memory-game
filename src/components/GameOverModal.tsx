import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  GameState,
  newGame,
  restartGame,
  selectIsSolo,
} from "../store/memoryGameSlice";
import { AnimatePresence, motion } from "motion/react";

import Button from "../ui/Button";
import GameOverMultiplayer from "./GameOverMultiplayer";
import GameOverSolo from "./GameOverSolo";

export default function GameOverModal() {
  const { gameState, numMoves, startTime, stopTime, players } = useAppSelector(
    (state) => state.memoryGame,
  );
  const isSolo = useAppSelector(selectIsSolo);
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence>
      {gameState === GameState.GameOver && (
        <motion.div
          key={startTime}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6"
        >
          <div className="w-full max-w-[40.875rem] space-y-6 rounded-sm bg-gray-50 p-6 pt-8 text-sm text-secondary-400 md:space-y-10 md:px-14 md:py-16">
            {isSolo ? (
              <GameOverSolo
                numMoves={numMoves}
                startTime={startTime}
                stopTime={stopTime}
              />
            ) : (
              <GameOverMultiplayer players={players} />
            )}
            <div className="flex flex-col gap-4 md:flex-row">
              <Button
                size="big"
                type="primary"
                onClick={() => dispatch(restartGame())}
              >
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}
