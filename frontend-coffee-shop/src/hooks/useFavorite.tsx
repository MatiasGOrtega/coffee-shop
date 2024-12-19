import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "@/hooks/use-toast";

interface FavoriteType {
  favoriteProducts: ProductType[];
  addProductFavorite: (product: ProductType) => void;
  removeProductFavorite: (productId: number) => void;
  clearFavorite: () => void;
}

export const useFavorite = create(
  persist<FavoriteType>(
    (set, get) => ({
      favoriteProducts: [],
      addProductFavorite: (product: ProductType) => {
        const currentProducts = get().favoriteProducts;
        const productExists = currentProducts.find(
          (currentProd: ProductType) => currentProd.id === product.id,
        );

        if (productExists) {
          return toast({
            title: "El produto ya existe en la lista de favoritos 🤷‍♂️",
            variant: "destructive",
          });
        }

        set({ favoriteProducts: [...get().favoriteProducts, product] });

        toast({
          title: "Producto agregado a favoritos ❤️",
        });
      },

      removeProductFavorite: (productId: number) => {
        set({
          favoriteProducts: [
            ...get().favoriteProducts.filter(
              (p: ProductType) => p.id !== productId,
            ),
          ],
        });
        toast({
          title: "Producto eliminado del favoritos 💔",
        });
      },

      clearFavorite: () => {
        set({ favoriteProducts: [] });
      },
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
