"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

function FeaturedProducts() {
  const { loading, error, result }: ResponseType = useGetFeaturedProducts();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm: px-24">
      <h3 className="px-6 text-3xl sm:pb-8">Productos Destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result != null && (
            result.map((product: ProductType) => {
              const { productImage } = product.attributes;
              return (<CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3 group"
              >
                <Card className="py-4 border border-gray-200 shadow-none">
                  <CardContent className="relative flex items-center justify-center px-6 py-2">
                    <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${productImage.data[0].attributes.url}`} alt="Image featured" />
                  </CardContent>
                </Card>
              </CarouselItem>
            )}))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default FeaturedProducts;
