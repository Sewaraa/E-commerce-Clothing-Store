import { Product } from "@/type/product";

const ProductImage = ({ product }: { product: Product }) => {
  return (
    <div className="flex justify-center h-[420px]">
      <img
        src={product.image}
        alt={product.title}
        aria-label={`Image of ${product.title}`}
        className="w-full h-full rounded object-contain shadow-lg max-w-sm transition-transform duration-300 hover:scale-105 active:scale-95"
      />
    </div>
  );
};
export default ProductImage;
