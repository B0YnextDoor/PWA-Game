import { MAX_MANA } from "../../../constants/core.constants";
import { useNotificaionStore } from "../../notifications/notification.store";
import { IGameStore, TurnType } from "../game.types";
import { drawCardAction } from "./draw-card";
import { updateHand } from "./update-hand";

const countMana = (currentTurn: number) => {
  return Math.min(currentTurn + 1, MAX_MANA);
};

export const endTurnAction = (state: IGameStore): Partial<IGameStore> => {
  const newTurn: TurnType =
    state.currentTurn === "player" ? "opponent" : "player";
  const isPlayer = newTurn === "player";
  const turn = state.turnNumber;

  state[newTurn] = drawCardAction(updateHand(state[newTurn]));

  if (isPlayer) {
    useNotificaionStore.getState().showMessage("Your Turn");
  }

  return {
    currentTurn: newTurn,
    turnNumber: isPlayer ? turn + 1 : turn,
    player: {
      ...state.player,
      mana: isPlayer ? countMana(turn) : state.player.mana,
    },
    opponent: {
      ...state.opponent,
      mana: isPlayer ? countMana(turn) : state.opponent.mana,
    },
  };
};
