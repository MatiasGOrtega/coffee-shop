import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";
import ImageProduct from "@/components/shared/imageProduct";
import { ButtonExpand, ButtonRemove } from "@/components/buttons";
import ProductTags from "@/components/shared/productTags";

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
    <li className="flex w-full lg:w-96 border-b py-6">
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
          <ButtonRemove onClick={() => onRemove(product.id)} />

          <ButtonExpand
            onClick={() => handleClick(product.slug)}
            className="rounded-full p-2 shadow-md"
          />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
