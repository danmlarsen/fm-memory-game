import { useState } from "react";
import BoardCell from "./BoardCell";

function generateBoard() {
  const uniqueNumbers = Array.from({ length: 18 }, (_, i) => ({
    number: i,
    show: false,
  }));
  const doubleNumbers = uniqueNumbers.concat(uniqueNumbers);

  return shuffleArray(doubleNumbers);
}

function shuffleArray(arr) {
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
  const [boardState, setBoardState] = useState(() => generateBoard());

  function handleClick(index) {
    setBoardState((prev) =>
      prev.map((prevCell, prevIndex) => {
        if (prevIndex === index)
          return {
            ...prevCell,
            show: true,
          };
        return prevCell;
      }),
    );
  }

  return (
    <div className="mx-auto grid size-[572px] grid-cols-[repeat(6,1fr)] grid-rows-[repeat(6,1fr)] gap-4">
      {boardState.map((el, index) => (
        <BoardCell
          key={index}
          show={el.show}
          disabled={el.show}
          onClick={() => handleClick(index)}
        >
          {el.number}
        </BoardCell>
      ))}
    </div>
  );
}
