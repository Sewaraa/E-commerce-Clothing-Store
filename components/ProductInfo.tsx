import { Product } from "@/type/product";
import { FaStar, FaTags } from "react-icons/fa";
import AddToCartButton from "./AddToCartButton";

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
         <AddToCartButton cart={{id:product.id,
          title:product.title,
          image:product.image,
          price:product.price,
        quantity:1}} />
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
