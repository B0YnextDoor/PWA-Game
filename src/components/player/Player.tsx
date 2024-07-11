import { IPlayer } from "../../store/game/game.types";
import { Board } from "../board/Board";
import { Hand } from "../hand/Hand";
import { PlayerMana } from "../player-info/player-mana/PlayerMana";
import { PlayerInfo } from "../player-info/PlayerInfo";
import cn from "clsx";

interface IPlayerProps {
  player: IPlayer;
  onClick: (id: string) => void;
  isHided: boolean;
}

export const Player = ({ player, onClick, isHided }: IPlayerProps) => {
  return (
    <section
      className={cn("absolute w-full h-[50vh]", {
        "top-0": isHided,
        "bottom-0": !isHided,
      })}
    >
      <Board hand={player.hand} isPlayer={!isHided} />
      <PlayerInfo player={player} type={isHided ? "opponent" : "player"} />
      <PlayerMana
        currentMana={player.mana}
        type={isHided ? "opponent" : "player"}
      />
      <Hand player={player} onClick={onClick} isHided={isHided} />
    </section>
  );
};
