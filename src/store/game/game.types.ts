import { IGameCard } from "../../types/card.types";

export type TurnType = "player" | "opponent";

export interface IPlayer {
  deck: IGameCard[];
  hand: IGameCard[];
  health: number;
  mana: number;
}

export interface IGameFunctionsStore {
  startGame: () => void;
  endTurn: () => void;
  playCard: (cardId: string) => void;
  returnCard: (cardId: string) => void;
  attackCard: (attackerId: string, targerId: string) => void;
  attackHero: (attackerId: string) => void;
}

export interface IGameStore extends IGameFunctionsStore {
  player: IPlayer;
  opponent: IPlayer;
  currentTurn: TurnType;
  turnNumber: number;
  isGameStarted: boolean;
}
