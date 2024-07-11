import { create } from "zustand";
import { IGameStore } from "./game.types";
import { endTurnAction } from "./actions/end-turn";
import { playCardAction } from "./actions/play-card";
import { attackCardAction } from "./actions/attack-card";
import { attackHeroAction } from "./actions/attack-hero";
import { returnCardAction } from "./actions/return-card";
import { initialGameData } from "./initial-data";
import { startGameAction } from "./actions/start-game";

const useGameStore = create<IGameStore>((set) => ({
  ...initialGameData,
  isGameStarted: false,
  startGame: () => set(() => startGameAction()),
  endTurn: () => set((state) => endTurnAction(state)),
  playCard: (cardId: string) => set((state) => playCardAction(state, cardId)),
  returnCard: (cardId: string) =>
    set((state) => returnCardAction(state, cardId)),
  attackCard: (attackerId: string, targerId: string) =>
    set((state) => attackCardAction(state, attackerId, targerId)),
  attackHero: (attackerId: string) =>
    set((state) => attackHeroAction(state, attackerId)),
}));

export { useGameStore };
