import { Expand, ShoppingCart, X } from "lucide-react";
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
        "group relative flex items-center rounded-sm border bg-white p-2 shadow-md transition-colors hover:bg-gray-300 dark:bg-black dark:hover:bg-gray-800",
        className,
      )}
    >
      <Expand />
      <span className="absolute -top-6 right-8 hidden flex-1 bg-black p-1 text-white group-hover:flex">
        Ver
      </span>
    </button>
  );
}

export function ButtonShoppingCart({ onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex items-center rounded-sm border bg-white p-2 shadow-md transition-colors hover:bg-gray-300 dark:bg-black dark:hover:bg-gray-800",
        className,
      )}
    >
      <ShoppingCart />
      <span className="absolute -top-6 right-8 hidden flex-1 bg-black p-1 text-white group-hover:flex">
        Añadir
      </span>
    </button>
  );
}

export function ButtonRemove({ onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative rounded-full p-2 text-red-500 shadow-md transition-colors hover:bg-red-500 hover:text-white",
        className,
      )}
    >
      <X size={20} />
      <span className="absolute -top-6 right-8 hidden bg-black p-1 text-white group-hover:block">
        Eliminar
      </span>
    </button>
  );
}
