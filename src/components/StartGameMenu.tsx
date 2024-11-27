import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { generatePlayers, startGame } from "../store/memoryGameSlice";
import { generateBoard } from "../utils/utils";

import Logo from "../ui/Logo";
import Button from "../ui/Button";
import MenuItem from "../ui/MenuItem";
import MenuButton from "../ui/MenuButton";

export default function StartGameMenu() {
  const dispatch = useAppDispatch();

  const [selectedTheme, setSelectedTheme] = useState("numbers");
  const [numPlayers, setNumPlayers] = useState(1);
  const [gridSize, setGridSize] = useState(4);

  function handleStartGame() {
    const newBoard = generateBoard(gridSize);

    dispatch(
      startGame({
        boardState: newBoard,
        gridSize,
        icons: selectedTheme === "icons",
        players: generatePlayers(numPlayers),
      }),
    );
  }

  return (
    <div className="container max-w-[40.875rem] space-y-8 md:space-y-[4.875rem]">
      <header className="grid place-items-center">
        <Logo className="h-10 w-[7.625rem] fill-gray-50 md:h-[3.125rem] md:w-[9.5625rem]" />
      </header>
      <main className="space-y-8 rounded-sm bg-gray-50 p-6 text-secondary-500 md:rounded-[1.25rem] md:p-14">
        <MenuItem name="Select Theme">
          <MenuButton
            isActive={selectedTheme === "numbers"}
            onClick={() => setSelectedTheme("numbers")}
          >
            Numbers
          </MenuButton>
          <MenuButton
            isActive={selectedTheme === "icons"}
            onClick={() => setSelectedTheme("icons")}
          >
            Icons
          </MenuButton>
        </MenuItem>

        <MenuItem name="Numbers of Players" gap="gap-2 md:gap-[1.375rem]">
          <MenuButton
            isActive={numPlayers === 1}
            onClick={() => setNumPlayers(1)}
          >
            1
          </MenuButton>
          <MenuButton
            isActive={numPlayers === 2}
            onClick={() => setNumPlayers(2)}
          >
            2
          </MenuButton>
          <MenuButton
            isActive={numPlayers === 3}
            onClick={() => setNumPlayers(3)}
          >
            3
          </MenuButton>
          <MenuButton
            isActive={numPlayers === 4}
            onClick={() => setNumPlayers(4)}
          >
            4
          </MenuButton>
        </MenuItem>

        <MenuItem name="Grid Size">
          <MenuButton isActive={gridSize === 4} onClick={() => setGridSize(4)}>
            4x4
          </MenuButton>
          <MenuButton isActive={gridSize === 6} onClick={() => setGridSize(6)}>
            6x6
          </MenuButton>
        </MenuItem>

        <div>
          <Button size="huge" onClick={handleStartGame}>
            Start Game
          </Button>
        </div>
      </main>
    </div>
  );
}
