import Button from "../ui/Button";

type AppProps = {
  onNewGame: () => void;
  onRestart: () => void;
  onResume: () => void;
};

export default function BoardHeaderGameMenu({
  onNewGame,
  onRestart,
  onResume,
}: AppProps) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-6">
      <div className="w-full max-w-sm space-y-4 rounded-sm bg-gray-50 p-6 text-sm text-secondary-400">
        <Button size="big" type="primary" onClick={onRestart}>
          Restart
        </Button>
        <Button size="big" type="secondary" onClick={onNewGame}>
          New Game
        </Button>
        <Button size="big" type="secondary" onClick={onResume}>
          Resume
        </Button>
      </div>
    </div>
  );
}
