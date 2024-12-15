"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, User } from "lucide-react";
import { MenuList } from "./menuList";
import { MenuListMobile } from "./menuListMobile";
import { ModeToggle } from "./modeToggle";

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

  return (
    <nav className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
      <h1 className="text-3xl" onClick={handleClick}>
        Coffe <span className="font-bold">Shop</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden">
        <MenuListMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        <ShoppingCart
          size={24}
          strokeWidth="1"
          className="cursor-pointer"
          onClick={handleCart}
        />

        <Heart
          size={24}
          strokeWidth="1"
          className="cursor-pointer"
          onClick={handleFav}
        />

        <User size={24} strokeWidth="1" className="cursor-pointer" />

        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
