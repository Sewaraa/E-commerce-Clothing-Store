'use client'
import React from 'react';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';
import { Product } from '@/type/product';
import { CartItems } from '@/type/cart';
import Sale from './Sale';
import { useFavoritesStore } from '@/stores/useFavoritesStore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const isFav = isFavorite(product.id);

  const cartItem: CartItems = {
    id: product.id,
    title: product.title,
    price: product.sale ? product.salePrice! : product.price,
    image: product.image,
    quantity: 1,
  };

  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition duration-300 flex flex-col">
      
      {/* Sale Badge */}
      {product.sale && <Sale />}

     

      {/* Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full aspect-[3/4] bg-gray-100">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h2>
        <p className="text-gray-500 text-sm line-clamp-2 mt-1">{product.description}</p>

        {/* Price */}
       {/* Price + Favorite */}
<div className="mt-2 flex items-center justify-between">
  {product.sale ? (
    <div className="flex items-center gap-2">
      <span className="text-amber-600 font-bold">${product.salePrice?.toFixed(2)}</span>
      <span className="text-gray-400 line-through text-sm">${product.price.toFixed(2)}</span>
    </div>
  ) : (
    <span className="text-amber-600 font-bold">${product.price.toFixed(2)}</span>
  )}

  <button
    onClick={() => toggleFavorite(product)}
    className="text-xl text-gray-400 hover:text-red-500 transition"
  >
    {isFav ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
  </button>
</div>

        {/* Add to Cart */}
        <AddToCartButton cart={cartItem} />
      </div>
    </div>
  );
};

export default ProductCard;