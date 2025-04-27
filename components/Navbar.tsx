import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const totalItems=useCartStore((state)=>state.totalItems());
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <header className="bg-amber-200 sticky top-0 z-50 shadow-sm ">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center ">
        <Link className="text-xl font-bold text-gray-800" href={"/"}>
          FASHION<span className="text-red-400">CUB</span>
        </Link>
    
      <div className="flex items-center gap-4">
        {isMounted && (
          <Link href={"/cart"} className="relative">
            <FaShoppingCart  className="text-gray-800 text-2xl"/>
            {totalItems>0 &&(
              <span className="absolute -top-2 -right-2  bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{totalItems}</span>
            )}
          </Link>
        )}
      </div>
      </div>
    </header>
  );
};
