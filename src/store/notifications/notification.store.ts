import { create } from "zustand";
import { INotificationStore } from "./notification.types";

export const useNotificaionStore = create<INotificationStore>((set) => ({
  message: "",
  type: "info",
  showMessage: (message, type = "info", duration = 2000) => {
    set({ message, type }),
      setTimeout(() => {
        set({ message: "" });
      }, duration);
  },
}));
