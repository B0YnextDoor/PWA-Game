import { IGameCard } from "../../types/card.types";
import { BoardCard } from "./board-card/BoardCard";

interface IBoard {
  hand: IGameCard[];
  isPlayer: boolean;
}

export const Board = ({ hand, isPlayer }: IBoard) => {
  return (
    <div
      className="px-20 flex items-center justify-center gap-2"
      style={!isPlayer ? { marginTop: "8.5rem" } : { paddingTop: "2rem" }}
    >
      {hand
        .filter((card) => card.isOnBoard)
        .map((card, id) => (
          <BoardCard key={id} card={card} isPlayer={isPlayer} />
        ))}
    </div>
  );
};
