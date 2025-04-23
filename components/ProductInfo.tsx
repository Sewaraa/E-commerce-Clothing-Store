import { Product } from "@/type/product";
import { FaShoppingCart, FaStar, FaTags } from "react-icons/fa";

const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <>
      <div className="space-y-6">
        <h1 className="font-bold text-3xl text-gray-800">{product.title}</h1>
        {product.rating && (
          <div className="flex items-center ">
            {" "}
            <FaStar className="text-yellow-400 mr-2" /> {product.rating.rate} ({product.rating.count} reviews)
          </div>
        )}
        {product.price && (
          <div className="text-2xl text-green-500 font-semibold">
            {product.price}$
          </div>
        )}
        {product.category && (
          <div className="flex items-center text-gray-500">
            {" "}
            <FaTags className="mr-2" /> {product.category}
          </div>
        )}
      
        {product.title && product.image && product.price && (
          <button
            aria-label={`Add ${product.title} to cart`}
            className="bg-black inline-flex justify-center items-center text-white  font-semibold w-full rounded shadow transition mt-4 gap-2 hover:bg-green-600 py-3"
          >
            {" "}
            <FaShoppingCart /> Add to cart
          </button>
        )}

        <div>
          {product.description && (
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Description
            </h2>
          )}

          <p className="text-gray-700 leading-relaxed">{product.description}</p>
        </div>
      </div>
    </>
  );
};
export default ProductInfo;
