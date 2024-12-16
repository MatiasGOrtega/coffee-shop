import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function BannerProduct() {
  return (
    <div className="mt-5 h-[350px] bg-[url('/slider-image.jpg')] bg-cover bg-center lg:h-[900px] flex items-center justify-center">
      <div className="p-4 w-full text-center text-white bg-black bg-opacity-50">
        <p className="text-lg">Sumérgete en una experiencia única</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Café Exquisito
        </h4>
        <p className="my-2 text-lg">Despierta tus sentidos con cada sorbo</p>
        <Link href="#" className={buttonVariants()}>
          Comprar
        </Link>
      </div>
    </div>
  );
}

export default BannerProduct;
