import { useAppSelector } from "../store/hooks";

export default function GameOverMultiplayer() {
  const { players } = useAppSelector((state) => state.memoryGame);

  const winnerAmount = Math.max(...players.map((p) => p.pairs));
  const winners = players.filter((player) => player.pairs === winnerAmount);

  const sortedPlayers = [...players].sort((a, b) => b.pairs - a.pairs);

  return (
    <>
      <div className="text-center">
        <h2>
          {winners.length > 1
            ? "It's a tie!"
            : `Player ${winners[0].playerNum} Wins!`}
        </h2>
        <p>Game over! Here are the results...</p>
      </div>
      <ul className="space-y-2">
        {sortedPlayers.map((player) => (
          <li
            key={player.playerNum}
            className={`bg-secondary-100 flex items-center justify-between rounded-sm p-4 ${player.pairs === winnerAmount ? "bg-secondary-900" : ""}`}
          >
            <span>Player {player.playerNum}</span>
            <span>{player.pairs} Pairs</span>
          </li>
        ))}
      </ul>
      <div></div>
    </>
  );
}
