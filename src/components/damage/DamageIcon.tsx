import { AnimatePresence, motion } from "framer-motion";
import { useDamageStore } from "../../store/game/damage.store";
import { TurnType } from "../../store/game/game.types";
import cn from "clsx";

interface IDamageIcon {
  id: string | TurnType;
  isRight: boolean;
}

export const DamageIcon = ({ id, isRight }: IDamageIcon) => {
  const { damages } = useDamageStore();
  return (
    <AnimatePresence>
      {damages[id] > 0 && (
        <motion.div
          initial={{ opacity: 1, y: 1, rotate: 0 }}
          animate={{ opacity: 0, y: 50, rotate: 15 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className={cn(
            "absolute top-3 w-full text-center text-red-500 font-bold text-xl z-30",
            isRight ? "-right-[55%]" : "-left-[55%]"
          )}
        >
          -{damages[id]}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
