import Head from 'next/head'
import React from 'react'
import SwiperSlid from '@/components/SwiperSlide'
import Swiperclothing from '@/components/Womenhome/womenclothing'
import Trending from '@/components/Womenhome/Trending'
import Newin from '@/components/Womenhome/Newin'


const HomeWomen = () => {


  return (
    <>
      <Head>
        <title>Women&apos;s Fashion | STELLA</title>
      </Head>

      {/* ===== Hero Section ===== */}
 <section className="relative w-full flex flex-col items-center justify-center bg-amber-200/50">
  {/* صورة الخلفية */}
  <div className="relative w-full h-[calc(100vh-64px)] md:h-auto md:min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src="/women/home1.jpg"
      alt="STELLA for Women"
      className="w-full h-200 object-cover md:object-contain"
    />

    {/* طبقة التدرج */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

    {/* المحتوى */}
    <div className="absolute text-white text-center px-4 md:px-6 top-1/2 -translate-y-1/2">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest mb-4 drop-shadow-lg">
        STELLA FOR WOMEN
      </h1>
      <p className="text-base md:text-xl mb-6 max-w-md mx-auto drop-shadow-md">
        Discover timeless elegance and modern style.
      </p>
      <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
        Shop Now
      </button>
    </div>
  </div>
</section>

      {/* ===== Discover Section ===== */}
     <section>
      <Swiperclothing/>
     </section>

      {/* ===== Trending Section ===== */}
      <section className="py-16 text-center text-2xl font-semibold bg-gray-50">
        <Trending/>
      </section>

      {/* ===== New In Section ===== */}
      <section className="py-16 text-center text-2xl font-semibold bg-white">
        <Newin/>
      </section>

      {/* ===== Shoes Section ===== */}
      <section className="py-16 text-center text-2xl font-semibold bg-gray-50">
        Just-Dropped Shoes
        <div className="mt-4">
          <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            Shop Shoes
          </button>
        </div>
      </section>
    </>
  )
}

export default HomeWomen