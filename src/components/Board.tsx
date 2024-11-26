import BoardCell from "./BoardCell";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addIntermediateMove,
  addMove,
  GameState,
  nextTurnWithDelay,
} from "../store/memoryGameSlice";
import GameIcon from "./GameIcon";
import { AnimatePresence, motion } from "motion/react";

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
        dispatch(nextTurnWithDelay({ delay: 1000, matched: true }));
      } else {
        dispatch(addMove({ matched: false }));
        dispatch(nextTurnWithDelay({ delay: 1000, matched: false }));
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={startTime}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        }}
        className={`mx-auto grid w-full leading-normal ${gridSize < 6 ? "max-w-[532px] gap-3 text-[24px] md:text-[56px]" : "max-w-[572px] gap-2 text-[40px] md:text-[44px]"}`}
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
