import { Player } from "../store/memoryGameSlice";

type AppProps = {
  players: Player[];
};

export default function GameOverMultiplayer({ players }: AppProps) {
  const winnerAmount = Math.max(...players.map((p) => p.pairs));
  const winners = players.filter((player) => player.pairs === winnerAmount);

  const sortedPlayers = [...players].sort((a, b) => b.pairs - a.pairs);

  return (
    <>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl text-secondary-900 md:text-5xl">
          {winners.length > 1
            ? "It's a tie!"
            : `Player ${winners[0].playerNum} Wins!`}
        </h2>
        <p className="text-sm md:text-lg">Game over! Here are the results...</p>
      </div>
      <ul className="space-y-2">
        {sortedPlayers.map((player) => (
          <li
            key={player.playerNum}
            className={`flex items-center justify-between rounded-sm bg-secondary-100 p-4 md:px-8 ${player.pairs === winnerAmount ? "bg-secondary-900 text-gray-50" : ""}`}
          >
            <div className="text-[0.8125rem] md:text-lg">
              <span>Player {player.playerNum}</span>{" "}
              {player.pairs === winnerAmount && <span>(Winner!)</span>}
            </div>
            <div
              className={`text-xl md:text-[2rem] md:leading-10 ${player.pairs === winnerAmount ? "text-gray-50" : "text-secondary-900"}`}
            >
              {player.pairs} Pairs
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
