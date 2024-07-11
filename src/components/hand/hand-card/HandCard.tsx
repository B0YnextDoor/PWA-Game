import { useState } from "react";
import { ICard } from "../../../types/card.types";
import cn from "clsx";
import { motion } from "framer-motion";
import { getCardRotation } from "./utils/get-card-rotation";
import { useGameStore } from "../../../store/game/game.store";

interface IHandCard {
  index: number;
  total: number;
  card: ICard;
  onClick: () => void;
  isDisabled?: boolean;
  isHided: boolean;
}

const initial = { scale: 1, zIndex: 0, y: 0 };

export const HandCard = ({
  index,
  total,
  card,
  onClick,
  isDisabled,
  isHided,
}: IHandCard) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { rotate, translateY } = getCardRotation(index, total, !isHided);
  const { currentTurn, player, opponent } = useGameStore();

  const isPlayerTurn = currentTurn === "player";
  const boardCards = isPlayerTurn ? player.hand : opponent.hand;

  const isDisabledButton =
    isDisabled ||
    (!isHided && !isPlayerTurn) ||
    boardCards.filter((card) => card.isOnBoard).length == 6;

  return (
    <motion.button
      className={cn("inline-block rounded-lg will-change-transform", {
        "-ml-7 cursor-pointer": !isHided,
        "-ml-9": isHided,
        "cursor-default": isHided || isDisabledButton,
      })}
      onClick={onClick}
      disabled={isDisabledButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={initial}
      animate={
        !isHided && isHovered
          ? { scale: 1.3, zIndex: 10, y: -105 }
          : { ...initial, y: translateY, rotate }
      }
      transition={{ type: "just", damping: 32, stiffness: 230 }}
    >
      <img
        src={!isHided ? `/cards/${card.name}.png` : "/card-bg.jpg"}
        alt=""
        width={110}
        height={176}
        className={cn({ "rounded-lg": isHided })}
        draggable="false"
      />
    </motion.button>
  );
};
