import { useAppSelector } from "../store/hooks";

export default function SoloStats() {
  const { numMoves } = useAppSelector((state) => state.memoryGame);

  return (
    <div className="mx-auto grid w-[540px] grid-cols-2 gap-8">
      <StatsBox name="Time" data="1:53" />
      <StatsBox name="Moves" data={numMoves} />
    </div>
  );
}

function StatsBox({ name, data }: { name: string; data: string | number }) {
  return (
    <div className="bg-secondary-100 flex items-center justify-between rounded-sm px-5 py-6">
      <div className="text-secondary-400">{name}</div>
      <div className="text-secondary-700">{data}</div>
    </div>
  );
}
