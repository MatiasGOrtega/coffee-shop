"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cartItem";

function Page() {
  const { products, removeProduct } = useCart();

  const precies = products.map((product) => product.productPrice);
  const totalPrice = formatPrice(
    precies.reduce((acc, price) => acc + price, 0),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold sm:text-start">
        Tu carrito
      </h1>
      <Separator className="mb-5" />
      <div className="grid sm:grid-cols-2 sm:gap-5">
        {products.length === 0 ? (
          <p>No hay productos en el carrito</p>
        ) : (
          <ul>
            {products.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onRemove={() => removeProduct(product.id)}
              />
            ))}
          </ul>
        )}
        <div className="max-w-xl">
          <div className="rounded-lg bg-slate-100 p-6">
            <p className="mb-3 text-lg font-semibold dark:text-black">
              Resumen del pedido
            </p>
            <Separator />
            <div className="my-4 flex justify-between gap-5 dark:text-black">
              <p>Total</p>
              <p>{totalPrice}</p>
            </div>
            <div className="mt-3 flex w-full items-center justify-between">
              <Button className="w-full" onClick={() => console.log("Comprar")}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
