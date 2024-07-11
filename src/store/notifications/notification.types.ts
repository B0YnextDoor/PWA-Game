type TypeNotification = "win" | "lose" | "info";

export interface INotificationStore {
  message: string;
  type: TypeNotification;
  showMessage: (message: string, type?: TypeNotification) => void;
}
