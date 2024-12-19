"use client";

import { useFavorite } from "@/hooks/useFavorite";
import FavoriteItem from "./components/favoriteItem";

function Page() {
  const { favoriteProducts } = useFavorite();

  return (
    <div className="mx-auto max-w-4xl py-4 sm:px-24 sm:py-32">
      <h1 className="sm:text-2xl">Tus productos favoritos</h1>
      <div>
        <div>
          {favoriteProducts.length === 0 ? (
            <p>No hay productos en favoritos</p>
          ) : (
            <ul>
              {favoriteProducts.map((product) => (
                <FavoriteItem
                  key={product.id}
                  product={product}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
