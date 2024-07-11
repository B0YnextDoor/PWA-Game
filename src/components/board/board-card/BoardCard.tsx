import { IGameCard } from "../../../types/card.types";
import { motion } from "framer-motion";
import cn from "clsx";
import { useGameStore } from "../../../store/game/game.store";
import { useSelectTarget } from "./utils/useSelectTarget";
import { useSelectAttacker } from "../../../store/game/select-attacker";
import { DamageIcon } from "../../damage/DamageIcon";

interface ICardProps {
  card: IGameCard;
  isPlayer: boolean;
}

export const BoardCard = ({ card, isPlayer }: ICardProps) => {
  const { returnCard, currentTurn } = useGameStore();
  const { handleSelectTarget } = useSelectTarget();
  const { setAttackerId, attackerId } = useSelectAttacker();

  const handleClick = (cardId: string) => {
    if (isPlayer) {
      card.isCanAttack ? setAttackerId(cardId) : returnCard(cardId);
    } else {
      handleSelectTarget(cardId);
    }
  };

  const isPlayerAttacker = isPlayer && card.id === attackerId;
  const isPlayerTurn = currentTurn === "player";

  return (
    <motion.button
      className={cn(
        "w-[150px] h-[240px] rounded-lg transition-colors relative overflow-hidden border-2 border-transparent",
        {
          "cursor-pointer": isPlayer && isPlayerTurn,
          "border-b-green-400": card.isCanAttack && isPlayer,
          "border-b-orange-700": isPlayerAttacker,
          // "border-transparent":
          //   !card.isCanAttack || !isPlayerTurn || (isPlayerTurn && !isPlayer),
          "border-b-red-400": !isPlayer && isPlayerTurn && attackerId,
        }
      )}
      initial={{ scale: 0.5, y: -200, rotate: -15, opacity: 0 }}
      animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
      transition={{ type: "just", damping: 20, stiffness: 150, mass: 1 }}
      disabled={!isPlayerTurn}
      onClick={() => handleClick(card.id)}
    >
      <img
        src={`/cards/${card.name}.png`}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable="false"
      />
      <DamageIcon id={card.id} isRight />
    </motion.button>
  );
};
