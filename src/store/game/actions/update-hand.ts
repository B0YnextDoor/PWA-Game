import { CARDS } from "../../../constants/cards.constants";
import { IPlayer } from "../game.types";

const getCardHealth = (cardName: string) => {
  const card = CARDS.find((card) => card.name == cardName);
  return card ? card.health : 0;
};

export const updateHand = (player: IPlayer) => {
  player.hand = player.hand.map((card) => ({
    ...card,
    health: getCardHealth(card.name),
    isCanAttack: card.isOnBoard,
    isPlayed: card.isOnBoard,
  }));

  return player;
};
