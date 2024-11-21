import { useAppSelector } from "../store/hooks";
import SoloStats from "./SoloStats";
import TurnBoxes from "./Turnboxes";

export default function BoardFooter() {
  const { solo } = useAppSelector((state) => state.memoryGame);

  return (
    <footer className="container mx-auto grid items-center">
      {solo ? <SoloStats /> : <TurnBoxes />}
    </footer>
  );
}
