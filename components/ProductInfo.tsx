import { Product } from "@/type/product";
import { FaStar, FaTags, FaHeart, FaRegHeart } from "react-icons/fa";
import AddToCartButton from "./AddToCartButton";
import { useFavoritesStore } from "@/stores/useFavoritesStore";

const ProductInfo = ({ product }: { product: Product }) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const isFav = isFavorite(product.id);

  return (
    <div className="space-y-6">
      <h1 className="font-bold text-3xl text-gray-800">{product.title}</h1>

      {product.rating && (
        <div className="flex items-center">
          <FaStar className="text-yellow-400 mr-2" /> 
          {product.rating.rate} ({product.rating.count} reviews)
        </div>
      )}

      {product.price && (
        <div className="text-2xl text-green-500 font-semibold">${product.price.toFixed(2)}</div>
      )}

      {product.category && (
        <div className="flex items-center text-gray-500">
          <FaTags className="mr-2" /> {product.category}
        </div>
      )}

      {/* Add to Cart + Favorite */}
      {product.title && product.image && product.price && (
        <div className="flex items-center gap-4 mt-4">
          <AddToCartButton
            cart={{
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              quantity: 1,
            }}
          />

          <button
            onClick={() => toggleFavorite(product)}
            className="text-2xl text-gray-400 hover:text-red-500 transition w-"
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
          >
            {isFav ? <FaHeart className="text-red-500 w-8 h-8" /> : <FaRegHeart  className="w-8 h-8"/>}
          </button>
        </div>
      )}

      <div>
        {product.description && (
          <>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Description</h2>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;