"use client";
import useGetProductCategory from "@/api/category";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import React from "react";
import ProductList from "./components/productList";

function Page() {
  const { categorySlug } = useParams();
  const titleCategory =
    categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
  const { result, loading }: ResponseType = useGetProductCategory(categorySlug);

  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      {result !== null && !loading && (
        <h1 className="text-3xl font-medium">Café {titleCategory}</h1>
      )}
      <Separator />
      <ProductList products={result} loading={loading} />
    </div>
  );
}

export default Page;
