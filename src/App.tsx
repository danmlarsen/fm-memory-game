import Board from "./components/Board";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";
import Button from "./ui/Button";
import MenuButton from "./ui/MenuButton";

function App() {
  return (
    <div className="container mx-auto grid min-h-screen items-center">
      <BoardHeader />
      <Board />
      <BoardFooter />

      {/* <div className="grid min-w-96 justify-center gap-4 bg-white">
        <Button>Start game</Button>
        <Button size="big">Start game</Button>
        <Button type="secondary">Start game</Button>
        <MenuButton>Numbers</MenuButton>
        <MenuButton isActive={true}>Numbers</MenuButton>
      </div> */}
    </div>
  );
}

export default App;
