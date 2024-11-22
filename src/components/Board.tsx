import BoardCell from "./BoardCell";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addIntermediateMove,
  addMove,
  GameState,
  nextTurnWithDelay,
} from "../store/memoryGameSlice";

export default function Board() {
  const { gameState, boardState, intermediateMoves, lastMatch, gridSize } =
    useAppSelector((state) => state.memoryGame);
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
    <div
      style={{
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
      }}
      className={`mx-auto grid size-[572px] gap-4`}
    >
      {boardState.map((boardCell, index) => (
        <BoardCell
          key={index}
          show={boardCell.show || intermediateMoves.includes(index)}
          lastMatch={lastMatch.includes(index)}
          disabled={
            gameState !== GameState.Playing || intermediateMoves.includes(index)
          }
          onClick={() => handleClick(index)}
        >
          {boardCell.number}
        </BoardCell>
      ))}
    </div>
  );
}
