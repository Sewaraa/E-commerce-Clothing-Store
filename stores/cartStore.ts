import { CartStore } from "@/type/cartStore";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) => {
        const items = get().items;
        const exist = items.find((i) => i.id === item.id);
        if (exist) {
          const newQuantity = exist.quantity + item.quantity;
          if (newQuantity <= 0) {
            set({ items: items.filter((i) => i.id !== item.id) });
          } else {
            set({
              items: items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            });
          }
        } else if (item.quantity > 0) {
          set({ items: [...items, item] });
        }
      },

      removeFromCart: (id) =>
        set({ items: get().items.filter((i) => i.id !== id) }),

      clearCart: () => {
        set(() => ({
          items: [],
        }));
        if (typeof window !== "undefined") {
          localStorage.removeItem("cart-storage");
        }
      },
      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      totalPrice: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    {
      name: "cart-storage",
    }
  )
);
