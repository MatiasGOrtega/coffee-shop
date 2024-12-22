"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { ButtonExpand, ButtonShoppingCart } from "./buttons";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/useCart";
import ImageProduct from "./shared/imageProduct";
import ProductTags from "./shared/productTags";

function FeaturedProducts() {
  const { loading, result } = useGetFeaturedProducts();
  const router = useRouter();

  const { addProduct } = useCart();

  const handleClick = (slug: string) => {
    router.push(`/product/${slug}`);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-4 sm:py-16">
      <h3 className="px-2 py-4 text-center text-3xl">Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="py-0">
          {loading && <SkeletonSchema grid={3} />}
          {result != null &&
            result.map((product: ProductType) => {
              return (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="p-3 shadow-md">
                    <CardContent className="relative flex items-center justify-center p-0">
                      <ImageProduct
                        imageUrl={product.productImage}
                        className="h-56 w-56 object-cover"
                      />
                      <div className="absolute bottom-0 w-full">
                        <div className="flex justify-end gap-x-5">
                          <ButtonExpand
                            className="block"
                            onClick={() => handleClick(product.slug)}
                          />
                          <ButtonShoppingCart
                            onClick={() => addProduct(product)}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardContent className="p-3">
                      <h4 className="text-lg font-semibold">
                        {product.productName}
                      </h4>
                      <ProductTags
                        test={product.productTest}
                        origin={product.productOrigin}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <div className="py-2 text-center text-gray-500">
          Deslizar para ver más
        </div>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}

export default FeaturedProducts;
