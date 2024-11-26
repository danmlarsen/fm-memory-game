import { useAppSelector } from "../store/hooks";
import TurnBox from "./TurnBox";

export default function TurnBoxes() {
  const { players, currentPlayer } = useAppSelector(
    (state) => state.memoryGame,
  );

  return (
    <div
      className="grid justify-center gap-6 md:gap-3 lg:gap-[30px]"
      style={{
        gridTemplateColumns: `repeat(${players.length},minmax(min-content,255px)`,
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
