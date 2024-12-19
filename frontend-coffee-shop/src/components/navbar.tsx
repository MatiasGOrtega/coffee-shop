"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { MenuList } from "./menuList";
import { MenuListMobile } from "./menuListMobile";
import { ModeToggle } from "./modeToggle";
import { useCart } from "@/hooks/useCart";

function Navbar() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  const handleCart = () => {
    router.push("/cart");
  };

  const handleFav = () => {
    router.push("/favorites");
  };

  const cart = useCart();

  return (
    <nav className="mx-auto flex cursor-pointer items-center justify-between p-4 sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={handleClick}>
        Coffe <span className="font-bold">Shop</span>
      </h1>
      <div className="hidden items-center justify-between sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <MenuListMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        {cart.products.length === 0 ? (
          <ShoppingCart
            size={24}
            strokeWidth="1"
            className="cursor-pointer transition-colors hover:bg-black hover:stroke-white"
            onClick={handleCart}
          />
        ) : (
          <div className="flex gap-1" onClick={handleCart}>
            <BaggageClaim
              size={24}
              strokeWidth="1"
              className="cursor-pointer"
            />
            <span>{cart.products.length}</span>
          </div>
        )}

        <Heart
          size={24}
          strokeWidth="1"
          className="cursor-pointer transition-colors hover:fill-red-500 hover:stroke-red-500"
          onClick={handleFav}
        />

        <User size={24} strokeWidth="1" className="cursor-pointer transition-colors hover:bg-black hover:stroke-white rounded " />

        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
