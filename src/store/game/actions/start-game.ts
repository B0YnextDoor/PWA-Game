import { IGameStore } from "../game.types";
import { initialGameData } from "../initial-data";
import shuffle from "lodash/shuffle";
import { CARDS } from "../../../constants/cards.constants";
import { IGameCard } from "../../../types/card.types";
import { MAX_HAND_CARDS } from "../../../constants/core.constants";

function createDeck(type: "p" | "o"): IGameCard[] {
  return CARDS.map((card, id) => ({
    ...card,
    id: type + "_" + (id + 1).toString(),
    isOnBoard: false,
    isCanAttack: false,
    isPlayed: false,
  }));
}

export const startGameAction = (): Partial<IGameStore> => {
  const playerDeck = shuffle(createDeck("p"));
  const opponentDeck = shuffle(createDeck("o"));
  return {
    ...initialGameData,
    player: {
      ...initialGameData.player,
      deck: playerDeck.slice(MAX_HAND_CARDS),
      hand: playerDeck.slice(0, MAX_HAND_CARDS),
    },
    opponent: {
      ...initialGameData.opponent,
      deck: opponentDeck.slice(MAX_HAND_CARDS),
      hand: opponentDeck.slice(0, MAX_HAND_CARDS),
    },
  };
};
