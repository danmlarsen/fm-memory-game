import Button from "../ui/Button";
import Logo from "../ui/Logo";

export default function BoardHeader() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <div className="flex gap-4">
        <Button>Restart</Button>
        <Button type="secondary">New Game</Button>
      </div>
    </header>
  );
}
