import React from "react";
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import { useFavorite } from "@/hooks/useFavorite";
import { useCart } from "@/hooks/useCart";
import {
  ButtonExpand,
  ButtonRemove,
  ButtonShoppingCart,
} from "@/components/buttons";
import ImageProduct from "@/components/shared/imageProduct";
import ProductTags from "@/components/shared/productTags";

interface FavoriteItemProps {
  product: ProductType;
}

function FavoriteItem({ product }: FavoriteItemProps) {
  const router = useRouter();
  const { removeProductFavorite } = useFavorite();
  const { addProduct } = useCart();
  const handleClick = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  const addToCheckout = () => {
    addProduct(product);
    removeProductFavorite(product.id);
  };

  const productPrice = formatPrice(product.productPrice);

  return (
    <li className="flex w-96 items-center border-b p-6">
      <ImageProduct
        imageUrl={product.productImage}
        className="h-24 w-24 overflow-hidden rounded-md sm:h-32 sm:w-32"
      />
      <div className="flex flex-1 justify-between pl-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{productPrice}</p>
          <div className="flex gap-1 text-sm">
            <ProductTags
              test={product.productTest}
              origin={product.productOrigin}
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <ButtonRemove onClick={() => removeProductFavorite(product.id)} />

          <ButtonExpand
            onClick={() => handleClick(product.slug)}
            className="rounded-full p-2 shadow-md"
          />

          <ButtonShoppingCart
            onClick={() => addToCheckout()}
            className="rounded-full bg-primary p-2 text-white shadow-md"
          />
        </div>
      </div>
    </li>
  );
}

export default FavoriteItem;
