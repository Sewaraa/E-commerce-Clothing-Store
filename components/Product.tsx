import { Product } from "@/type/product";
import Link from "next/link";
import ProductImage from "./ProductImage";
import AddToCartButton from "./AddToCartButton";

type MyProductProps = {
  pro: Product;
};

export const MyProduct = ({ pro }: MyProductProps) => {
  return (
    <Link
      key={pro.id}
      href={`/product/${pro.id}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* صورة المنتج */}
      <div className="relative bg-gray-50 aspect-square overflow-hidden">
        <ProductImage product={pro} />
      </div>

      {/* نصوص المنتج */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-black transition-colors">
          {pro.title}
        </h2>

        <div className="flex items-center justify-between mt-2">
          <p className="text-lg font-bold text-gray-800">${pro.price}</p>
          
        </div>
        <AddToCartButton cart={{id:pro.id,
          title:pro.title,
          image:pro.image,
          price:pro.price,
        quantity:1}} />
      </div>
    </Link>
  );
};