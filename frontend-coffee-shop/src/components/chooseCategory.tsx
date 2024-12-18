"use client";
import { useGetProductCategories } from "@/api/products";
import { ResponseType } from "@/types/response";
import Link from "next/link";
import React from "react";
import { CategoryType } from "@/types/category";

function ChooseCategory() {
  const { result, loading }: ResponseType = useGetProductCategories();
  return (
    <div className="mx-auto max-w-6xl py-4 sm:px-24 sm:py-16">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige una categoria</h3>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-3 p-4">
        {!loading &&
          result !== undefined &&
          result?.map((category: CategoryType) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="shadow-lg"
            >
              <div className="rounded-t-lg realtive mx-auto max-w-xs bg-cover overflow-hidden bg-no-repeat md:max-w-[310px] h-44 md:h-[350px]">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.categoryMainImage.url}`}
                  alt="image category"
                  className="w-full md:h-full transition duration-300 ease-in-out hover:scale-110 "
                />
              </div>
              <p className="bg-black text-white dark:bg-white dark:text-black text-lg text-center font-bold rounded-b-lg">{category.categoryName}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default ChooseCategory;
