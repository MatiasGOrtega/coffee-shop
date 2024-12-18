import React from "react";
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
function ProductCard({ product }: { product: ProductType }) {
  const router = useRouter();
  const price = formatPrice(product.productPrice);

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
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent>
          {product.productImage.map((image) => (
            <CarouselItem key={image.id} className="group">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                alt="Image product"
                className="h-56 w-full rounded-xl"
              />
              <div className="absolute bottom-1 right-1 w-full transition duration-200 group-hover:opacity-100 sm:opacity-0">
                <div className="flex justify-end gap-x-3">
                  <ButtonExpand
                    className="block"
                    onClick={() => handleClick(product.slug)}
                  />
                  <ButtonShoppingCart onClick={() => console.log("Add Item")} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <p className="text-center text-2xl">{product.productName}</p>
      <p className="text-center font-bold">{price}</p>
    </Link>
  );
}

export default ProductCard;
