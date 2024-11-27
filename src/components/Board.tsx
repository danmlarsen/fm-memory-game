import { AnimatePresence, motion } from "motion/react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addIntermediateMove,
  addMove,
  GameState,
  nextTurnWithDelay,
} from "../store/memoryGameSlice";

import GameIcon from "./GameIcon";
import BoardCell from "./BoardCell";

const boardVariants = {
  show: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

export default function Board() {
  const {
    gameState,
    boardState,
    icons,
    intermediateMoves,
    lastMatch,
    gridSize,
    startTime,
  } = useAppSelector((state) => state.memoryGame);
  const dispatch = useAppDispatch();

  function handleClick(moveIndex: number) {
    if (gameState !== GameState.Playing) return;

    dispatch(addIntermediateMove(moveIndex));

    if (intermediateMoves.length === 1) {
      const [prevIntermediateMoveIndex] = intermediateMoves;

      if (
        boardState[moveIndex].number ===
        boardState[prevIntermediateMoveIndex].number
      ) {
        dispatch(addMove({ matched: true }));
        dispatch(nextTurnWithDelay({ delay: 700, matched: true }));
      } else {
        dispatch(addMove({ matched: false }));
        dispatch(nextTurnWithDelay({ delay: 700, matched: false }));
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={startTime}
        initial="hide"
        animate="show"
        exit="hide"
        variants={boardVariants}
        style={{
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
        className={`mx-auto grid w-full leading-normal ${gridSize < 6 ? "max-w-[33.25rem] gap-3 text-[2.5rem] md:gap-5 md:text-[3.5rem]" : "max-w-[35.75rem] gap-2 text-[1.5rem] md:gap-4 md:text-[2.75rem]"}`}
      >
        {boardState.map((boardCell, index) => (
          <BoardCell
            key={index}
            show={boardCell.show || intermediateMoves.includes(index)}
            lastMatch={lastMatch.includes(index)}
            disabled={
              gameState !== GameState.Playing ||
              intermediateMoves.includes(index)
            }
            onClick={() => handleClick(index)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={startTime}
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "linear" }}
              >
                {icons ? (
                  <GameIcon
                    className={`${gridSize < 6 ? "size-10 md:size-14" : "size-8 md:size-10"}`}
                    iconNum={boardCell.number}
                  />
                ) : (
                  boardCell.number
                )}
              </motion.div>
            </AnimatePresence>
          </BoardCell>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
