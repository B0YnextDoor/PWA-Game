import { IGameStore } from "../game.types";

export const playCardAction = (
  state: IGameStore,
  cardId: string
): Partial<IGameStore> => {
  const isPlayerTurn = state.currentTurn === "player";
  const currentPlayer = isPlayerTurn ? state.player : state.opponent;
  const currentCard = currentPlayer.hand.find((card) => card.id === cardId);
  if (currentCard && currentPlayer.mana >= currentCard.mana) {
    currentCard.isOnBoard = true;
    currentPlayer.mana -= currentCard.mana;
  }
  return isPlayerTurn ? { player: currentPlayer } : { opponent: currentPlayer };
};
