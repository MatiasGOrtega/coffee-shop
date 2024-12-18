import React, { useState } from "react";
import FiltersControlCategory from "./filtersControlCategory";
import SkeletonSchema from "@/components/skeletonSchema";
import { ProductType } from "@/types/product";
import ProductCard from "./productCard";

function ProductList({
  products,
  loading,
}: {
  products: ProductType[] | null;
  loading: boolean;
}) {
  const [filter, setFilter] = useState("all");

  const setFilterOrigin = (value: string) => {
    setFilter(value);
  };

  const filterProducts =
    filter === "all"
      ? products
      : products?.filter(
          (product: ProductType) => product.productOrigin === filter,
        ) || null;

  return (
    <div className="sm:flex sm:justify-between">
      <FiltersControlCategory setFilterOrigin={setFilterOrigin} />
      {/* Tipo taste 
        Agregar un nuevo filtro para taste
      */}
      {/* <FiltersControlCategory setFilterTaste={setFilterTaste} /> */}
      <div className="mt-8 grid gap-5 md:grid-cols-3 md:gap-10">
        {loading && <SkeletonSchema grid={3} />}
        {filterProducts !== null &&
          !loading &&
          filterProducts.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      {filterProducts !== null && filterProducts.length === 0 && !loading && (
        <p className="w-full text-center">No hay productos disponibles</p>
      )}
    </div>
  );
}

export default ProductList;
