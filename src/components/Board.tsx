import { useEffect } from "react";
import BoardCell from "./BoardCell";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  addIntermediateMove,
  addMove,
  GameState,
  nextTurnWithDelay,
  startGame,
} from "../store/memoryGameSlice";

function generateBoard(size = 6) {
  const uniqueNumbers = Array.from({ length: size ** 2 / 2 }, (_, i) => ({
    number: i,
    show: false,
  }));
  const doubleNumbers = uniqueNumbers.concat(uniqueNumbers);

  return shuffleArray(doubleNumbers);
}

function shuffleArray(arr: { number: number; show: boolean }[]) {
  const shuffledArr = [...arr];
  let currentIndex = shuffledArr.length;
  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [shuffledArr[currentIndex], shuffledArr[randomIndex]] = [
      shuffledArr[randomIndex],
      shuffledArr[currentIndex],
    ];
  }
  return shuffledArr;
}

export default function Board() {
  const { gameState, boardState, intermediateMoves } = useAppSelector(
    (state) => state.memoryGame,
  );

  const boardSize = 4;

  const dispatch = useAppDispatch();

  useEffect(() => {
    const newBoard = generateBoard(boardSize);

    dispatch(
      startGame({
        boardState: newBoard,
      }),
    );
  }, [dispatch]);

  function handleClick(moveIndex: number) {
    if (gameState !== GameState.Playing) return;

    dispatch(addIntermediateMove(moveIndex));

    if (intermediateMoves.length === 1) {
      const [prevIntermediateMoveIndex] = intermediateMoves;

      if (
        boardState[moveIndex].number ===
        boardState[prevIntermediateMoveIndex].number
      ) {
        dispatch(addMove());
        dispatch(nextTurnWithDelay({ delay: 1000, matched: true }));
      } else {
        dispatch(addMove());
        dispatch(nextTurnWithDelay({ delay: 1000, matched: false }));
      }
    }
  }

  return (
    <div
      className={`mx-auto grid size-[572px] grid-cols-[repeat(${boardSize},1fr)] grid-rows-[repeat(${boardSize},1fr)] gap-4`}
    >
      {boardState.map((el, index) => (
        <BoardCell
          key={index}
          show={el.show || intermediateMoves.includes(index)}
          disabled={
            gameState !== GameState.Playing ||
            el.show ||
            intermediateMoves.includes(index)
          }
          onClick={() => handleClick(index)}
        >
          {el.number}
        </BoardCell>
      ))}
    </div>
  );
}
