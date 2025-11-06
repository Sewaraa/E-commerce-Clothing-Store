import { sampleData } from '@/data/sampleData';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Trending = () => {
  const TrendingData = sampleData.filter(product => product.category.includes("Trending"));

  return (
    <section className="py-14 px-4 md:px-8 bg-gradient-to-b from-white to-amber-200/50">
      <h2 className="text-3xl font-bold mb-10 text-center text-amber-900/90 tracking-wide">
        Trending Now 
      </h2>

      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-8">
        {TrendingData.map((trend, index) => (
          <Link key={index}
          href={`/product/${trend.id}`}> 
          <motion.div
            
            className="flex flex-col items-center text-center cursor-pointer"
            initial={{ scale: 1.2, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }} 
          >
            <div className="relative w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white">
              <img
                src={trend.image}
                alt={trend.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* حلقة خفيفة حول الصورة */}
              <div className="absolute inset-0 rounded-full ring-2 ring-amber-400/50"></div>
            </div>

            <h3 className="mt-3 text-sm md:text-base lg:text-lg font-medium text-gray-800 hover:text-amber-700 transition-colors duration-300">
              {trend.title}
            </h3>
          </motion.div></Link>
         
        ))}
      </div>
    </section>
  );
}

export default Trending;