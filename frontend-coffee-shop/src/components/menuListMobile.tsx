import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MenuListMobile() {
  return (
    <Popover>
      <PopoverTrigger>
        <Menu size={24} strokeWidth="1" className="cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent>
        <Link className="block" href="/favorites">Favoritos</Link>
        <Link className="block" href="/cart">Carrito</Link>
        <Link className="block" href="/profile">Perfil</Link>
      </PopoverContent>
    </Popover>
  );
}
