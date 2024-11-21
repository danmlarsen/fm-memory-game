import Board from "./components/Board";
import BoardFooter from "./components/BoardFooter";
import BoardHeader from "./components/BoardHeader";

function App() {
  return (
    <div className="container mx-auto grid min-h-screen items-center">
      <BoardHeader />
      <Board />
      <BoardFooter />
    </div>
  );
}

export default App;
