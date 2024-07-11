import { EnumTypeCard, IGameCard } from "../../../types/card.types";

export const findTaunts = (deck: IGameCard[]) => {
  return deck.filter(
    (card) => card.type == EnumTypeCard.taunt && card.isOnBoard
  );
};
