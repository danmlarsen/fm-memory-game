import { useAppSelector } from "../store/hooks";
import TurnBox from "./TurnBox";

export default function TurnBoxes() {
  const { players, currentPlayer } = useAppSelector(
    (state) => state.memoryGame,
  );

  return (
    <div className="grid grid-flow-col gap-4">
      {players.map((playerScore, index) => (
        <TurnBox
          key={index}
          playerName={`Player ${index + 1}`}
          moves={playerScore}
          isActive={currentPlayer === index}
        />
      ))}
    </div>
  );
}
