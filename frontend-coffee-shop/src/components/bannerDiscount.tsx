import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

function BannerDiscount() {
  return (
    <div className="p-5 text-center sm:p-20 bg-black bg-opacity-5 dark:bg-opacity-50">
      <h2 className="text-2xl font-black uppercase text-primary">
        Consigue hasta un 25%
      </h2>
      <h3 className="mt-3 font-semibold">
        20% al gastar 200$ o 25% al gastar 250$. Usa el codigo CAFECITO
      </h3>
      <div className="mx-auto mt-5 flex max-w-md justify-center gap-8">
        <Link href={"#"} className={buttonVariants()}>
          Comprar
        </Link>
        <Link href={"#"} className={buttonVariants({ variant: "outline" })}>
          Mas informacion
        </Link>
      </div>
    </div>
  );
}

export default BannerDiscount;
