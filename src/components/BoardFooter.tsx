import SoloStats from "./SoloStats";
import TurnBoxes from "./Turnboxes";

export default function BoardFooter() {
  return (
    <footer className="container mx-auto grid items-center">
      <TurnBoxes />
      <SoloStats />
    </footer>
  );
}
