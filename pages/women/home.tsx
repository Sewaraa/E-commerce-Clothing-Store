import Head from 'next/head'
import React from 'react'
import Swiperclothing from '@/components/Womenhome/womenclothing'
import Trending from '@/components/Womenhome/Trending'
import Newin from '@/components/Womenhome/Newin'
import Link from 'next/link'

const HomeWomen = () => {
  return (
    <>
      <Head>
        <title>Women&apos;s Fashion | STELLA</title>
      </Head>

      {/* غلاف الصفحة بالكامل */}
      <div className="relative min-h-screen overflow-hidden">

        {/* 🔥 طبقة التدرج الأسود الممتدة على كل الصفحة */}
        <div className="fixed inset-0 bg-black/40 -z-10"></div>

        {/* ===== Hero Section ===== */}
        <section className="relative w-full flex flex-col items-center justify-center bg-amber-200/50">
          <div className="relative w-full h-[calc(100vh-64px)] md:h-auto md:min-h-[600px] flex items-center justify-center overflow-hidden">
            <img
              src="/women/home1.jpg"
              alt="STELLA for Women"
              className="w-full h-200 object-cover md:object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

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

        {/* ===== باقي الصفحة ===== */}
        <section className="relative z-10">
          <Swiperclothing />
        </section>

        <section className="relative z-10">
          <Trending />
        </section>

        <section id="newin" className="relative z-10">
          <Newin />
        </section>

        <section className="relative z-10 text-center py-20">
          <h2 className="text-4xl font-bold mb-6 text-white">Just-Dropped Shoes</h2>
          <Link 
          href={'/women/shoes'}
          className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Shop Shoes
          </Link>
        </section>
      </div>
    </>
  )
}

export default HomeWomen