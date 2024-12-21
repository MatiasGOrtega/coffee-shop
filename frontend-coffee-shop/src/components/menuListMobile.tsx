import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/hooks/useCart";
import { useFavorite } from "@/hooks/useFavorite";

export function MenuListMobile() {
  const { products } = useCart();
  const { favoriteProducts } = useFavorite();
  return (
    <Popover>
      <PopoverTrigger>
        <Menu size={24} strokeWidth="1" className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent>
        <Link className="block" href="/favorites">
          Favoritos{" "}
          {favoriteProducts.length === 0 ? (
            ""
          ) : (
            <span className="rounded-full bg-gray-700 px-1 align-middle text-sm text-white">
              {favoriteProducts.length}
            </span>
          )}
        </Link>
        <Link className="block" href="/cart">
          Carrito{" "}
          {products.length === 0 ? (
            ""
          ) : (
            <span className="rounded-full bg-gray-700 px-1 align-middle text-sm text-white">
              {products.length}
            </span>
          )}
        </Link>
        <Link className="block" href="/profile">
          Perfil
        </Link>
      </PopoverContent>
    </Popover>
  );
}
