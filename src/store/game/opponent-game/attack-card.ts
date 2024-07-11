import { IGameCard } from "../../../types/card.types";

const attackCards = (
  targets: IGameCard[],
  attackers: IGameCard[],
  power: number,
  attackCard: (attackerId: string, targerId: string) => void
) => {
  if (!power) return { power, attackers };
  targets.forEach((target) => {
    if (!power) return;
    if (target.health <= power) {
      while (target.health && attackers.length) {
        const attacker = attackers[0];
        target.health -= attacker.power;
        power -= attacker.power;
        attackCard(attacker.id, target.id);
        attackers = attackers.filter((card) => card.id != attacker.id);
      }
    }
  });
  return { power, attackers };
};

export const attackPlayerCards = (
  taunts: IGameCard[],
  playerAttackers: IGameCard[],
  opponentAttackers: IGameCard[],
  opponentPower: number,
  attackCard: (attackerId: string, targerId: string) => void
) => {
  const { power, attackers } = attackCards(
    taunts,
    opponentAttackers,
    opponentPower,
    attackCard
  );

  return attackCards(playerAttackers, attackers, power, attackCard);
};
