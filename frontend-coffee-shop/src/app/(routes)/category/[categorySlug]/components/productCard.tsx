import { ProductType } from "@/types/product";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ButtonExpand, ButtonShoppingCart } from "@/components/buttons";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import ProductTags from "@/components/shared/productTags";
import ImageProduct from "@/components/shared/imageProduct";
import { useCart } from "@/hooks/useCart";

function ProductCard({ product }: { product: ProductType }) {
  const router = useRouter();
  const price = formatPrice(product.productPrice);

  const { addProduct } = useCart();

  const handleClick = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className="relative rounded-lg p-2 transition-shadow hover:shadow-md"
    >
      <div className="absolute top-4 z-[1] flex items-center justify-between gap-3 px-3">
        <p className="rounded bg-black px-2 py-1 text-white dark:bg-white dark:text-black">
          {product.productTest}
        </p>
        <p className="rounded bg-orange-500 px-2 py-1 text-white">
          {product.productOrigin}
        </p>
      </div>
      <Carousel>
        <CarouselContent className="py-0">
          {product.productImage.map((image) => {
            return (
              <CarouselItem key={image.id}>
                <ImageProduct
                  imageUrl={product.productImage}
                  className="h-56 w-56 rounded-lg object-cover"
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-28 left-28 w-full">
        <div className="flex gap-x-5">
          <ButtonExpand
            className="block"
            onClick={() => handleClick(product.slug)}
          />
          <ButtonShoppingCart onClick={() => addProduct(product)} />
        </div>
      </div>
      <div className="py-1">
        <ProductTags
          test={product.productTest}
          origin={product.productOrigin}
        />
        <h4 className="text-lg font-semibold">{product.productName}</h4>
        <p className="font-bold">{price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
