import { useAppSelector } from "../store/hooks";
import TurnBox from "./TurnBox";

export default function TurnBoxes() {
  const { players, currentPlayer } = useAppSelector(
    (state) => state.memoryGame,
  );

  return (
    <div
      className="grid justify-center gap-6 md:gap-3 lg:gap-[1.875rem]"
      style={{
        gridTemplateColumns: `repeat(${players.length},minmax(min-content,15.9375rem)`,
      }}
    >
      {players.map((player, index) => (
        <TurnBox
          key={player.playerNum}
          playerNum={player.playerNum}
          moves={player.pairs}
          isActive={currentPlayer === index}
        />
      ))}
    </div>
  );
}
