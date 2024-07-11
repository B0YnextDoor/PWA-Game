import cn from "clsx";

interface IBadgeProps {
  value: number;
  maxValue: number;
  type?: boolean;
}

export const Badge = ({ value, maxValue, type }: IBadgeProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-to-t px-3.5 rounded-2xl shadow-lg w-max text-white [text-shadow:_0.1px_0_rgb(0_0_0_/_40%)]",
        {
          "from-sky-700 to-sky-400": type,
          "from-red-700 to-red-400": !type,
        }
      )}
    >
      {value}/{maxValue}
    </div>
  );
};
