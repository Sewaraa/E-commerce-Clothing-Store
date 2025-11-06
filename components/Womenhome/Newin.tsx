import { sampleData } from '@/data/sampleData';
import Link from 'next/link';
import React from 'react';

const Newin = () => {
  const newInData = sampleData.filter(product => product.category.includes('NewIn'));

  return (
    <section className="py-14 px-4 md:px-10 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800 tracking-tight">
        New In
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 place-items-center">
        {newInData.map((item, index) => (
          <Link
            key={index}
            href={`/product/${item.id}`}
            className="relative group rounded-2xl overflow-hidden w-40 h-56 md:w-52 md:h-72"
          >
            {/* الصورة */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-105"
            />

            {/* الشريط الشفاف مع البلور */}
            <div className="absolute bottom-0 w-full py-2 backdrop-blur-md bg-white/40 text-center">
              <h3 className="text-gray-800 text-sm md:text-base font-semibold">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Newin;