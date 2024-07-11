import { MAX_MANA } from "../../../constants/core.constants";
import { TurnType } from "../../../store/game/game.types";
import { Badge } from "../../ui/badge/Badge";
import cn from "clsx";

interface IPlayerManaProps {
  currentMana: number;
  type: TurnType;
}

export const PlayerMana = ({ currentMana, type }: IPlayerManaProps) => {
  return (
    <div
      className={cn("flex items-center absolute", {
        "right-9 bottom-7": type === "player",
        "left-8 top-7": type === "opponent",
      })}
    >
      <Badge value={currentMana} maxValue={MAX_MANA} type />
      <div className="flex items-center ml-2 gap-1">
        {new Array(MAX_MANA).fill(0).map((_, id) => (
          <div
            key={id}
            className="w-6 h-6 rounded-full bg-[rgb(2,0,36)]"
            style={
              id < currentMana
                ? {
                    background:
                      "linear-gradient(340deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(5,95,178,1) 40%, rgba(0,212,255,1) 100%)",
                  }
                : {}
            }
          />
        ))}
      </div>
    </div>
  );
};
