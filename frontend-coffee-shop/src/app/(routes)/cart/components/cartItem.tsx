import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface CartItemProps {
  product: ProductType;
  onRemove: (id: number) => void;
}

function CartItem({ product, onRemove }: CartItemProps) {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  const productPrice = formatPrice(product.productPrice);

  return (
    <li className="flex border-b py-6">
      <div className="cursor-pointer" onClick={() => handleClick(product.slug)}>
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.productImage[0].url}`}
          alt={product.productName}
          className="h-24 w-24 overflow-hidden rounded-md sm:h-32 sm:w-auto"
        />
      </div>
      <div className="flex flex-1 justify-between px-6">
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
        </div>
      </div>
      <div className="flex items-center px-6">
        <button
          onClick={() => onRemove(product.id)}
          className="rounded-full p-2 text-red-500 transition-colors hover:bg-red-500 hover:text-white"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </li>
  );
}

export default CartItem;
