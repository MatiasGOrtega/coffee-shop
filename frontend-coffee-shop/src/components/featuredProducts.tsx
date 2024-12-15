"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
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

function FeaturedProducts() {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();

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
                  className="group md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="p-3 shadow-md">
                    <CardContent className="relative flex items-center justify-center p-0">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.productImage[0].url}`}
                        className="h-56 w-56 object-cover"
                        alt="Image featured"
                      />
                      <div className="absolute bottom-0 w-full opacity-0 transition duration-200 group-hover:opacity-100">
                        <div className="flex justify-end gap-x-5">
                          <ButtonExpand
                            onClick={() => handleClick(product.slug)}
                          />
                          <ButtonShoppingCart
                            onClick={() => console.log("Add Item")}
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardContent className="p-3">
                      <h4 className="text-lg font-semibold">
                        {product.productName}
                      </h4>
                      <div className="flex gap-1 text-sm">
                        <span className="rounded bg-black px-2 py-1 text-white dark:bg-white dark:text-black">
                          {product.productTest}
                        </span>
                        <span className="rounded bg-orange-500 px-2 py-1 text-white">
                          {product.productOrigin}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex"/>
        <CarouselNext className="hidden sm:flex"/>
      </Carousel>
    </div>
  );
}

export default FeaturedProducts;
