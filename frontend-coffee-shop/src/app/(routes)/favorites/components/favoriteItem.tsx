import React from "react";
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { useFavorite } from "@/hooks/useFavorite";
import { useCart } from "@/hooks/useCart";
import { X } from "lucide-react";

interface FavoriteItemProps {
  product: ProductType;
}

function FavoriteItem({ product }: FavoriteItemProps) {
  const router = useRouter();
  const { removeProductFavorite } = useFavorite();
  const { addProduct } = useCart();
  const handleClick = (slug: string) => {
    router.push(`/product/${slug}`);
  }

  const addToCheckout = () => {
    addProduct(product);
    removeProductFavorite(product.id);
  };

  const productPrice = formatPrice(product.productPrice);

  return (
    <li className="flex border-b py-6">
      <div onClick={() => handleClick(product.slug)} className="cursor-pointer">
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.productImage[0].url}`}
          alt={product.productName}
          className="h-24 w-24 overflow-hidden rounded-md sm:h-32 sm:w-32"
        />
      </div>
      <div className="flex flex-1 justify-between px-6">
        <div>
          <div>
            <h2 className="text-lg font-bold">{product.productName}</h2>
            <p className="font-bold">{productPrice}</p>
            <div className="flex gap-1 text-sm">
              <span className="rounded bg-black px-2 py-1 text-white dark:bg-white dark:text-black">
                {product.productTest}
              </span>
              <span className="rounded bg-orange-500 px-2 py-1 text-white">
                {product.productOrigin}
              </span>
            </div>
            <Button onClick={() => addToCheckout()} className="mt-2">
              Añadir al carrito
            </Button>
          </div>
        </div>
        <div className="flex items-center px-6">
          <button
            onClick={() => removeProductFavorite(product.id)}
            className="rounded-full p-2 text-red-500 transition-colors hover:bg-red-500 hover:text-white shadow-md"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default FavoriteItem;
