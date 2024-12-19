import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "@/hooks/use-toast";

interface CartType {
  products: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
}

export const useCart = create(
  persist<CartType>(
    (set, get) => ({
      products: [],
      addProduct: (product: ProductType) => {
        const currentProducts = get().products;
        const productExists = currentProducts.find(
          (currentProd: ProductType) => currentProd.id === product.id,
        );

        if (productExists) {
          return toast({
            title: "El produto ya existe en el carrito",
            variant: "destructive",
          });
        }

        set({ products: [...get().products, product] });

        toast({
          title: "Producto agregado al carrito ✅",
        });
      },

      removeProduct: (productId: number) => {
        set({
          products: [
            ...get().products.filter((p: ProductType) => p.id !== productId),
          ],
        });
        toast({
          title: "Producto eliminado del carrito 🗑",
        });
      },

      clearCart: () => {
        set({ products: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
