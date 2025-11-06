"use client";
import React from "react";
import { useFavoritesStore } from "@/stores/useFavoritesStore";
import ProductCard from "@/components/ProductCart";


const FavoritesPage = () => {
  const { favorites } = useFavoritesStore();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">You haven’t added any favorites yet ❤️</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;