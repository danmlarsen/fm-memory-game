import { useAppSelector } from "../store/hooks";
import TurnBox from "./TurnBox";

export default function TurnBoxes() {
  const { players, currentPlayer } = useAppSelector(
    (state) => state.memoryGame,
  );

  return (
    <div
      className="grid justify-center gap-4"
      style={{
        gridTemplateColumns: `repeat(${players.length},minmax(min-content,255px)`,
      }}
    >
      {players.map((player, index) => (
        <TurnBox
          key={index}
          playerNum={player.playerNum}
          moves={player.pairs}
          isActive={currentPlayer === index}
        />
      ))}
    </div>
  );
}
