import { useGameStore } from "../../store/game/game.store";
import { TurnType } from "../../store/game/game.types";
import { Button } from "../ui/button/Button";

interface IProps {
  currentTurn: TurnType;
}

export const EndTurnButton = ({ currentTurn }: IProps) => {
  const { endTurn } = useGameStore();
  const isPlayer = currentTurn === "player";
  return (
    <Button
      variant={isPlayer ? "primary" : "disabled"}
      disabled={!isPlayer}
      className="absolute top-[46.5%] right-5 z-10"
      onClick={() => endTurn()}
    >
      {isPlayer ? "End Turn" : "Opponents turn"}
    </Button>
  );
};
