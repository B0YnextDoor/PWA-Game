import { Button } from "../../components/ui/button/Button";
import { useGameStore } from "../../store/game/game.store";

export const Home = () => {
  const { startGame } = useGameStore();

  return (
    <div className="flex h-screen items-center justify-center flex-col gap-4">
      <h1 className="text-6xl font-bold text-yellow-500">DURKA</h1>
      <Button variant="primary" onClick={() => startGame()}>
        LECHITSYA
      </Button>
    </div>
  );
};
