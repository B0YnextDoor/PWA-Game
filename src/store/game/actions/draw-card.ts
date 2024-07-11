import { MAX_HAND_CARDS } from "../../../constants/core.constants";
import { IPlayer } from "../game.types";

export const drawCardAction = (currentPlayer: IPlayer) => {
  const cardOnHand = currentPlayer.hand.filter(
    (card) => !card.isOnBoard
  ).length;

  if (
    currentPlayer.hand.length - cardOnHand < 6 &&
    cardOnHand < MAX_HAND_CARDS &&
    currentPlayer.deck.length
  ) {
    const cardsDraw = Math.min(
      MAX_HAND_CARDS - cardOnHand,
      currentPlayer.deck.length
    );
    const updateHand = currentPlayer.deck.slice(0, cardsDraw);
    currentPlayer.hand.push(...updateHand);
    currentPlayer.deck = currentPlayer.deck.slice(cardsDraw);
  }

  return currentPlayer;
};
