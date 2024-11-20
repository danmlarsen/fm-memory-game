type AppProps = {
  playerName: string;
  moves: number;
  isActive?: boolean;
};

export default function TurnBox({
  playerName,
  moves,
  isActive = false,
}: AppProps) {
  return (
    <div className="space-y-4">
      <div
        className={`relative flex items-center justify-between rounded-sm px-5 py-6 ${isActive ? "bg-primary-500" : "bg-secondary-100"}`}
      >
        <div className={`${isActive ? "text-white" : "text-secondary-400"}`}>
          {playerName}
        </div>
        <div className={`${isActive ? "text-white" : "text-secondary-900"}`}>
          {moves}
        </div>
        {isActive && (
          <div className="absolute left-1/2 top-0 -z-10 size-5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-primary-500"></div>
        )}
      </div>
      <div className="text-center">
        {isActive && (
          <span className="uppercase text-secondary-900">Current turn</span>
        )}
      </div>
    </div>
  );
}
