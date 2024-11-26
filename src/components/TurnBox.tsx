type AppProps = {
  playerNum: number;
  moves: number;
  isActive?: boolean;
};

export default function TurnBox({
  playerNum,
  moves,
  isActive = false,
}: AppProps) {
  return (
    <div className="space-y-4">
      <div
        className={`relative flex flex-col items-center rounded-sm p-2 py-[10px] transition duration-300 md:items-start md:p-4 lg:min-h-[72px] lg:flex-row lg:items-center lg:justify-between ${isActive ? "bg-primary-500" : "bg-secondary-100"}`}
      >
        <div className={`${isActive ? "text-white" : "text-secondary-400"}`}>
          <span className="md:hidden">P{playerNum}</span>
          <span className="hidden md:inline">Player {playerNum}</span>
        </div>
        <div className={`${isActive ? "text-white" : "text-secondary-900"}`}>
          {moves}
        </div>
        {isActive && (
          <div className="absolute left-1/2 top-0 -z-10 size-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary-500"></div>
        )}
      </div>
      <div className="hidden text-center lg:block">
        {isActive && (
          <span className="uppercase text-secondary-900">Current turn</span>
        )}
      </div>
    </div>
  );
}
