import { useState } from "react";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import MenuButton from "../ui/MenuButton";
import { useAppDispatch } from "../store/hooks";
import { generatePlayers, startGame } from "../store/memoryGameSlice";
import { generateBoard } from "../utils/utils";

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
        icons: selectedTheme === "icons" ? true : false,
        players: generatePlayers(numPlayers),
      }),
    );
  }

  return (
    <div className="container max-w-[654px] space-y-8">
      <header className="grid place-items-center">
        <div>
          <Logo className="h-10 w-[122px] fill-gray-50" />
        </div>
      </header>
      <main className="space-y-8 rounded-[20px] bg-gray-50 p-6 text-secondary-500 md:p-14">
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

        <MenuItem name="Number of Players">
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
          <Button size="big" onClick={handleStartGame}>
            Start Game
          </Button>
        </div>
      </main>
    </div>
  );
}

function MenuItem({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h3>{name}</h3>
      <div className="grid grid-flow-col gap-3 text-white">{children}</div>
    </div>
  );
}
