import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const AccessoriesShop = () => {
  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-amber-50 via-white to-amber-50 overflow-hidden ">
      <div className="absolute inset-0">
        <img
          src="/women/accessories/diamondring.jpg" 
          alt="Shop Accessories"
          className="w-full h-full object-cover blur-[2px] brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
      </div>

      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 gap-10">
      
        <motion.div
          className="text-center md:text-left space-y-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Elevate Your Look 
          </h2>
          <p className="text-gray-600 text-lg max-w-md">
            Discover elegant accessories designed to add that final touch of
            sophistication. From chic jewelry to timeless handbags — all in one place.
          </p>

          <Link
            href="/women/accessories"
            className="inline-block mt-4 bg-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-amber-600 hover:scale-105 transition-transform duration-300"
          >
            Explore Accessories 💍
          </Link>
        </motion.div>

      
        <motion.div
          className="relative w-full md:w-[450px] h-[350px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src="/women/accessories/goldearrings.jpg" 
            alt="Elegant Accessories"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AccessoriesShop;