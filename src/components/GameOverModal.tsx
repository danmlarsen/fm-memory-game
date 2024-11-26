import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  GameState,
  newGame,
  restartGame,
  selectIsSolo,
} from "../store/memoryGameSlice";
import Button from "../ui/Button";
import GameOverMultiplayer from "./GameOverMultiplayer";
import GameOverSolo from "./GameOverSolo";

import { AnimatePresence, motion } from "motion/react";

export default function GameOverModal() {
  const { gameState } = useAppSelector((state) => state.memoryGame);
  const isSolo = useAppSelector(selectIsSolo);
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence>
      {gameState === GameState.GameOver && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6"
        >
          <div className="w-full max-w-[654px] space-y-6 rounded-sm bg-gray-50 p-6 text-sm text-secondary-400">
            {isSolo ? <GameOverSolo /> : <GameOverMultiplayer />}
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
