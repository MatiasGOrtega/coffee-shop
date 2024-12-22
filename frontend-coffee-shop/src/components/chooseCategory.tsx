/* eslint-disable @next/next/no-img-element */
"use client";
import { useGetProductCategories } from "@/api/products";
import Link from "next/link";
import React from "react";
import { CategoryType } from "@/types/category";

function ChooseCategory() {
  const { result, loading } = useGetProductCategories();
  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige una categoria</h3>
      <div className="grid grid-cols-2 gap-5 p-4 md:grid-cols-3">
        {!loading &&
          result !== undefined &&
          result?.map((category: CategoryType) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="shadow-lg"
            >
              <div className="realtive mx-auto h-44 max-w-xs overflow-hidden rounded-t-lg bg-cover bg-no-repeat md:h-[350px] md:max-w-[310px]">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.categoryMainImage.url}`}
                  alt="image category"
                  className="w-full transition duration-300 ease-in-out hover:scale-110 md:h-full"
                />
              </div>
              <p className="rounded-b-lg bg-black text-center text-lg font-bold text-white dark:bg-white dark:text-black">
                {category.categoryName}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ChooseCategory;
