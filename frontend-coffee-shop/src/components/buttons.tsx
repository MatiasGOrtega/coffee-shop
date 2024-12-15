import { Expand, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  onClick: () => void;
  className?: string;
}

export function ButtonExpand({ onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center rounded-sm border bg-white p-2 shadow-md transition-colors hover:bg-gray-300 dark:bg-black dark:hover:bg-gray-800",
        className,
      )}
    >
      <Expand />
    </button>
  );
}

export function ButtonShoppingCart({ onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center rounded-sm border bg-white p-2 shadow-md transition-colors hover:bg-gray-300 dark:bg-black dark:hover:bg-gray-800",
        className,
      )}
    >
      <ShoppingCart />
    </button>
  );
}
