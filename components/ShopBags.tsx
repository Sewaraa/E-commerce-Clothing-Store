import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const ShopBags = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden rounded-none md:rounded-2xl shadow-sm mt-12">
     
      <img
        src="/women/bags/modernbag.jpg"
        alt="Luxury Bags"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6"
      >
        <h2 className="text-5xl md:text-6xl font-serif tracking-wide mb-4 uppercase">
          Elegance in Every Detail
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Discover our exclusive collection of luxury bags — crafted for modern sophistication.
        </p>

        <Link
          href="/women/bags"
          className="bg-white text-black px-10 py-3 rounded-full text-sm font-semibold 
                     tracking-wider hover:bg-black hover:text-white transition-all duration-500"
        >
          Shop Bags
        </Link>
      </motion.div>
    </section>
  );
};

export default ShopBags;