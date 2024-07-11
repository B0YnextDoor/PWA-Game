import { IPlayer, TurnType } from "../../store/game/game.types";
import cn from "clsx";
import { Badge } from "../ui/badge/Badge";
import { useSelectTarget } from "../board/board-card/utils/useSelectTarget";
import { DamageIcon } from "../damage/DamageIcon";
import { useSelectAttacker } from "../../store/game/select-attacker";
import { useGameStore } from "../../store/game/game.store";
import { findTaunts } from "./utils/find-taunts";

interface IPlayerInfo {
  player: Omit<IPlayer, "deck">;
  type: TurnType;
}

export const PlayerInfo = ({ player, type }: IPlayerInfo) => {
  const { handleSelectTarget } = useSelectTarget();
  const { attackerId } = useSelectAttacker();
  const { opponent, currentTurn } = useGameStore();
  const isPlayer = type === "player";
  const isCanAttack =
    !isPlayer &&
    !findTaunts(opponent.hand).length &&
    currentTurn === "player" &&
    attackerId;
  return (
    <button
      className={cn("absolute bg-transparent z-[1]", {
        "bottom-3 left-3 cursor-not-allowed": isPlayer,
        "-top-3 right-5 cursor-pointer": !isPlayer,
        "cursor-not-allowed": !isCanAttack,
        "border-b-2 rounded-lg border-red-400": isCanAttack && !isPlayer,
      })}
      disabled={isPlayer || !isCanAttack}
      onClick={() => handleSelectTarget("", true)}
    >
      <img
        src={`${type}.png`}
        alt={type}
        className="mb-2"
        width={isPlayer ? 250 : 210}
        height={isPlayer ? 375 : 210}
        draggable="false"
      />
      <div className="w-full flex justify-center items-center absolute bottom-[1px]">
        <Badge value={player.health} maxValue={25} />
      </div>
      <DamageIcon id={type} isRight={isPlayer} />
    </button>
  );
};
