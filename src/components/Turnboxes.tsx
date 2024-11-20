import TurnBox from "./TurnBox";

export default function TurnBoxes() {
  return (
    <div className="grid grid-flow-col gap-4">
      <TurnBox playerName="Player 1" moves={4} />
      <TurnBox playerName="Player 2" moves={5} isActive={true} />
      <TurnBox playerName="Player 3" moves={2} />
      <TurnBox playerName="Player 4" moves={0} />
    </div>
  );
}
