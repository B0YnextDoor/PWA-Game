import { IGameCard } from "../../../types/card.types";
import { useDamageStore } from "../damage.store";
import { IGameStore } from "../game.types";

export const getCardById = (deck: IGameCard[], cardId: string) => {
  return deck.find((card) => card.id === cardId);
};

const deleteCardFromDeck = (deck: IGameCard[], cardId: string) => {
  return deck.filter((card) => card.id != cardId);
};

const displayDamage = (cardId: string, damage: number) => {
  useDamageStore.getState().addDamage(cardId, damage);
};

export const attackCardAction = (
  state: IGameStore,
  attackerId: string,
  targetId: string
): Partial<IGameStore> => {
  const isAttackerPlayer = state.currentTurn === "player";
  const opponent = isAttackerPlayer ? "opponent" : "player";
  const attacker = isAttackerPlayer ? "player" : "opponent";

  const attackerCard = getCardById(state[attacker].hand, attackerId);
  const targetCard = getCardById(state[opponent].hand, targetId);

  if (attackerCard && targetCard && attackerCard.isCanAttack) {
    targetCard.health -= attackerCard.power;
    attackerCard.isCanAttack = false;
    attackerCard.isPlayed = true;
    displayDamage(targetId, attackerCard.power);
    displayDamage(attackerId, targetCard.power);
    if (targetCard.health <= 0) {
      state[opponent].hand = deleteCardFromDeck(state[opponent].hand, targetId);
    }
    if (targetCard.power >= attackerCard.health) {
      state[attacker].hand = deleteCardFromDeck(
        state[attacker].hand,
        attackerId
      );
    }
  }

  return { player: state.player, opponent: state.opponent };
};
