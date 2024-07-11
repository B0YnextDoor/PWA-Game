import { Notification } from "../../components/notification/Notification";
import { useGameStore } from "../../store/game/game.store";
import { GameBoard } from "../board/GameBoard";
import { Home } from "./Home";

function App() {
  const { isGameStarted } = useGameStore();
  return (
    <main>
      <Notification />
      {!isGameStarted ? <Home /> : <GameBoard />}
    </main>
  );
}

export default App;
