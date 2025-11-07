import Link from "next/link";
import { motion } from "framer-motion";
import { FaTruckFast, } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

const PurchasePromoBanner = () => {
  return (
    <section className="relative z-10 py-16 bg-gradient-to-r from-amber-200/40 via-white to-amber-100/50 text-center overflow-hidden  shadow-md ">
    
      <motion.div
        initial={{ opacity: 0.2, y: 10 }}
        animate={{ opacity: 0.3, y: -10 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-6 left-10 text-6xl text-amber-400/60"
      >
        <FaTruckFast />
      </motion.div>
      <motion.div
        initial={{ opacity: 0.2, y: -10 }}
        animate={{ opacity: 0.3, y: 10 }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 right-10 text-6xl text-amber-400/60"
      >
        <FaShoppingBag />
      </motion.div>

      {/* النصوص */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
        Shop Effortlessly with STELLA
      </h2>
      <p className="text-gray-600 mb-6 text-lg max-w-xl mx-auto">
        Enjoy smooth shopping, secure checkout, and fast delivery right to your door.  
        Because elegance starts with an experience.
      </p>

      <Link
        href="/women/clothing"
        className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-semibold 
                   hover:bg-amber-600 hover:scale-105 transition-all duration-300 shadow-md"
      >
        Start Shopping 🛍
      </Link>
    </section>
  );
};

export default PurchasePromoBanner;