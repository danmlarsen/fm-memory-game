import { useAppSelector } from "../store/hooks";
import { selectIsSolo } from "../store/memoryGameSlice";
import SoloStats from "./SoloStats";
import TurnBoxes from "./Turnboxes";

export default function BoardFooter() {
  const isSolo = useAppSelector(selectIsSolo);

  return <footer>{isSolo ? <SoloStats /> : <TurnBoxes />}</footer>;
}
