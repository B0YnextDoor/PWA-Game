import { EnumTypeCard } from "../../../types/card.types";
import { useNotificaionStore } from "../../notifications/notification.store";
import { useDamageStore } from "../damage.store";
import { IGameStore } from "../game.types";
import { getCardById } from "./attack-card";

export const attackHeroAction = (
  state: IGameStore,
  attackerId: string
): Partial<IGameStore> => {
  const isAttackerPlayer = state.currentTurn === "player";
  const opponent = isAttackerPlayer ? "opponent" : "player";

  const attacker = getCardById(
    isAttackerPlayer ? state.player.hand : state.opponent.hand,
    attackerId
  );

  const opponentTaunt = state[opponent].hand.filter(
    (card) => card.type == EnumTypeCard.taunt && card.isOnBoard
  );

  if (attacker && attacker.isCanAttack && opponentTaunt.length == 0) {
    state[opponent].health -= attacker.power;
    attacker.isCanAttack = false;
    attacker.isPlayed = true;
    useDamageStore.getState().addDamage(opponent, attacker.power);
    if (state[opponent].health <= 0) {
      state.isGameStarted = false;
      useNotificaionStore
        .getState()
        .showMessage(
          isAttackerPlayer ? "You Win!" : "You lose :(",
          isAttackerPlayer ? "win" : "lose"
        );
    }
  }

  return {
    player: state.player,
    opponent: state.opponent,
    isGameStarted: state.isGameStarted,
  };
};
