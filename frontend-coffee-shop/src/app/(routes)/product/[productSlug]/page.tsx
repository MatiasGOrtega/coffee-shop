"use client";
import { useGetProductBySlug } from "@/api/products";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import React from "react";
import CarouselProduct from "./components/carouselProduct";
import SkeletonProduct from "./components/skeletonProduct";
import InfoProduct from "./components/infoProduct";

function Page() {
  const params = useParams();
  const { productSlug } = params;
  const { result }: ResponseType = useGetProductBySlug(productSlug);
  const imagesProduct = result && result[0] ? result[0].productImage || [] : [];

  if (result === null) {
    return <SkeletonProduct />;
  }

  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-32">
      <div className="grid sm:grid-cols-2">
        <div className="">
          <CarouselProduct images={imagesProduct} />
        </div>
        <div className="sm:px-12">
          <InfoProduct product={result[0]} />
        </div>
      </div>
    </div>
  );
}

export default Page;
