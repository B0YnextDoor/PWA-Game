import { useGameStore } from "../../store/game/game.store";
import { Player } from "../../components/player/Player";
import { EndTurnButton } from "../../components/end-turn-button/EndTurnButton";
import { useOpponentPlay } from "../../store/game/opponent-game/useOpponentPlay";

export const GameBoard = () => {
  const { player, opponent, playCard, currentTurn } = useGameStore();
  useOpponentPlay();
  return (
    <div
      className="relative h-screen w-full grid"
      style={{ gridTemplateRows: "1fr 1fr" }}
    >
      <Player player={opponent} onClick={(_) => {}} isHided={true} />
      <EndTurnButton currentTurn={currentTurn} />
      <hr className="border-orange-500 opacity-60 absolute left-0 top-1/2 w-11/12 h-1" />
      <Player player={player} onClick={playCard} isHided={false} />
    </div>
  );
};
