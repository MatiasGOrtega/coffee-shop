"use client";

import { useFavorite } from "@/hooks/useFavorite";
import FavoriteItem from "./components/favoriteItem";

function Page() {
  const { favoriteProducts } = useFavorite();

  return (
    <div className="flex flex-col justify-start max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-center text-3xl font-bold sm:text-start">
        Tus productos favoritos
      </h1>
      <div>
        {favoriteProducts.length === 0 ? (
          <p>No hay productos en favoritos</p>
        ) : (
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] place-items-center gap-8 pt-8">
            {favoriteProducts.map((product) => (
              <FavoriteItem key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Page;
