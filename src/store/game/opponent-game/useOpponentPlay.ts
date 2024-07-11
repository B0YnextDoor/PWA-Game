import { useEffect } from "react";
import { IGameCard } from "../../../types/card.types";
import { useGameStore } from "../game.store";
import { attackPlayer } from "./attack-player";
import { playCards } from "./play-card";

const getPlayerBoard = (hand: IGameCard[]) => {
  return hand.filter((card) => card.isOnBoard);
};

export const useOpponentPlay = () => {
  const state = useGameStore();
  const play = () => {
    if (state.currentTurn != "opponent") return;
    attackPlayer(
      getPlayerBoard(state.player.hand),
      getPlayerBoard(state.opponent.hand),
      state.attackCard,
      state.attackHero
    );
    setTimeout(() => {}, 1000);
    playCards(state.opponent.hand, state.opponent.mana, state.playCard);
    setTimeout(() => state.endTurn(), 1000);
  };
  useEffect(() => play(), [state.currentTurn]);
};
