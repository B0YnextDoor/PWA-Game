import { motion } from "framer-motion";
import { useNotificaionStore } from "../../store/notifications/notification.store";
import cn from "clsx";

const initial = { opacity: 0, zoom: 1 };

export const Notification = () => {
  const { message, type } = useNotificaionStore();
  return (
    !!message && (
      <motion.div
        className="fixed w-full h-full left-0 top-0 z-50 flex items-center justify-center bg-[#102a27]/80"
        initial={initial}
        animate={{ opacity: 1, zoom: 1.06 }}
        exit={initial}
        transition={{ duration: 0.5 }}
      >
        <div
          className={cn(
            "rounded-lg text-white py-2 px-4 mx-auto w-max font-semibold text-xl shadow-2xl",
            {
              "bg-gradient-to-t from-green-700 to-green-500": type === "win",
              "bg-gradient-to-t from-red-700 to-red-500": type === "lose",
              "secondary-gradient": type === "info",
            }
          )}
        >
          {message}
        </div>
      </motion.div>
    )
  );
};
