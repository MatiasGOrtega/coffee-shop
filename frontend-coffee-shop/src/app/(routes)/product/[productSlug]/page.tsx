"use client";
import { useGetProductBySlug } from "@/api/products";
import { useParams } from "next/navigation";
import React from "react";
import CarouselProduct from "./components/carouselProduct";
import SkeletonProduct from "./components/skeletonProduct";
import InfoProduct from "./components/infoProduct";


function Page() {
  const params = useParams();
  const { productSlug } = params;

  const { result } = useGetProductBySlug(productSlug);

  if (result === null) {
    return <SkeletonProduct />;
  }

  return (
    <div className="mx-auto max-w-6xl p-4 sm:px-12 sm:py-24">
      <div className="grid sm:grid-cols-2">
        <CarouselProduct images={result[0].productImage} />
        <InfoProduct product={result[0]} />
      </div>
    </div>
  );
}

export default Page;
