import { create } from "zustand";
import { Product } from "@/type/product";

interface FavoritesState {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
  favorites: [],

  toggleFavorite: (product) => {
    const { favorites } = get();
    const exists = favorites.find((p) => p.id === product.id);

    if (exists) {
      set({ favorites: favorites.filter((p) => p.id !== product.id) });
    } else {
      set({ favorites: [...favorites, product] });
    }
  },

  removeFavorite: (id) => {
    set({ favorites: get().favorites.filter((p) => p.id !== id) });
  },

  isFavorite: (id) => {
    return get().favorites.some((p) => p.id === id);
  },
}));