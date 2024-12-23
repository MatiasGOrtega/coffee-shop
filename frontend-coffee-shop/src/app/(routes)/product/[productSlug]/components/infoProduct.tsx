import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/useCart";
import { useFavorite } from "@/hooks/useFavorite";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";
import ProductTags from "@/components/shared/productTags";

interface InfoProductProps {
  product: ProductType;
}

function InfoProduct({ product }: InfoProductProps) {
  const productPrice = formatPrice(product.productPrice);

  const { addProductFavorite } = useFavorite();
  const { addProduct } = useCart();

  return (
    <div>
      <div className="mb-3 justify-between sm:flex">
        <h1 className="text-2xl">{product.productName}</h1>
        <div className="flex items-center justify-between gap-3">
          <ProductTags
            test={product.productTest}
            origin={product.productOrigin}
          />
        </div>
      </div>
      <Separator className="my-4" />
      <p>{product.productDescription}</p>
      <Separator className="my-4" />
      <p className="my-4 text-2xl">{productPrice}</p>
      <div className="flex items-center gap-5">
        <Button className="w-1/2" onClick={() => addProduct(product)}>
          Comprar
        </Button>
        <Heart
          size={24}
          strokeWidth={1}
          className="cursor-pointer transition-colors hover:fill-red-500 hover:stroke-red-500"
          onClick={() => addProductFavorite(product)}
        />
      </div>
    </div>
  );
}

export default InfoProduct;
