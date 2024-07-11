import { useGameStore } from "../../../../store/game/game.store";
import { useSelectAttacker } from "../../../../store/game/select-attacker";

export const useSelectTarget = () => {
  const { attackHero, attackCard, currentTurn } = useGameStore();
  const { attackerId, setAttackerId } = useSelectAttacker();

  const handleSelectTarget = (targetId: string, isHero: boolean = false) => {
    if (!attackerId || currentTurn == "opponent") return;

    if (isHero) attackHero(attackerId);
    else attackCard(attackerId, targetId);

    setAttackerId(null);
  };

  return { handleSelectTarget };
};
