import { IPlayer, IGameStore, IGameFunctionsStore } from "./game.types";

const initialisePlayerData = (): IPlayer => {
  return { deck: [], hand: [], health: 25, mana: 1 };
};

export const initialGameData: Omit<IGameStore, keyof IGameFunctionsStore> = {
  player: initialisePlayerData(),
  opponent: initialisePlayerData(),
  currentTurn: "player",
  turnNumber: 1,
  isGameStarted: true,
};
