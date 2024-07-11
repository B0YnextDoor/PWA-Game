import { findTaunts } from "../../../components/player-info/utils/find-taunts";
import { IGameCard } from "../../../types/card.types";
import { attackPlayerCards } from "./attack-card";

const findAttackers = (deck: IGameCard[]) => {
  return deck.filter((card) => !card.type);
};

export const attackPlayer = (
  playerBoard: IGameCard[],
  opponentBoard: IGameCard[],
  attackCard: (attackerId: string, targerId: string) => void,
  attackHero: (attackerId: string) => void
) => {
  const opponentAttackers = findAttackers(opponentBoard);
  if (!opponentAttackers.length) return;

  const opponentPower = opponentAttackers.reduce(
    (sum, card) => sum + card.power,
    0
  );

  const { power, attackers } = attackPlayerCards(
    findTaunts(playerBoard),
    findAttackers(playerBoard),
    opponentAttackers,
    opponentPower,
    attackCard
  );

  if (!power) return;

  attackers.forEach((card) => attackHero(card.id));
};
