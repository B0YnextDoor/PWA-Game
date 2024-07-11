import { IGameCard } from "../../../types/card.types";
import random from "lodash/random";

const getPlayableCards = (deck: IGameCard[], mana: number) => {
  return deck.filter((card) => !card.isOnBoard && card.mana <= mana);
};

export const playCards = (
  hand: IGameCard[],
  mana: number,
  playCard: (id: string) => void
) => {
  let playableCards = getPlayableCards(hand, mana);
  let cardsId: string[] = [];
  while (!!playableCards.length && !!mana) {
    const card = playableCards[random(playableCards.length - 1)];
    cardsId.push(card.id);
    mana -= card.mana;
    playableCards = getPlayableCards(playableCards, mana);
  }
  cardsId.forEach((id) => playCard(id));
};
