import type { ReactNode, ButtonHTMLAttributes } from "react";
import cn from "clsx";
import styles from "./Button.module.css";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "gray" | "disabled";
  isCircle?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  isCircle,
  className,
  ...rest
}: IButton) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        { [styles.circle]: isCircle },
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
