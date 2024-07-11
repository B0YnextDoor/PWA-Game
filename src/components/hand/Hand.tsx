import { IPlayer } from "../../store/game/game.types";
import { HandCard } from "./hand-card/HandCard";

interface IHand {
  player: IPlayer;
  onClick: (id: string) => void;
  isHided: boolean;
}

export const Hand = ({ player, onClick, isHided }: IHand) => {
  return (
    <div className={`absolute w-full ${!isHided ? "-bottom-8" : "-top-8"}`}>
      <div className="flex items-center justify-center">
        {player.hand
          .filter((card) => !card.isOnBoard)
          .map((card, id, array) => (
            <HandCard
              key={id}
              index={id}
              total={array.length}
              card={card}
              onClick={() => onClick(card.id)}
              isHided={isHided}
              isDisabled={player.mana < card.mana}
            />
          ))}
      </div>
    </div>
  );
};
