import Head from "next/head";
import React from "react";
import Swiperclothing from "@/components/Womenhome/womenclothing";
import Trending from "@/components/Womenhome/Trending";
import Newin from "@/components/Womenhome/Newin";
import Link from "next/link";
import SectionSale from "@/components/SectionSale";
import PurchasePromoBanner from "@/components/PurchasePromoBanner";
import ShopBags from "@/components/ShopBags";
import AccessoriesShop from "@/components/AccessoriesShop";




const HomeWomen = () => {
  return (
    <>
      <Head>
        <title>Women&apos;s Fashion | STELLA</title>
      </Head>

      <div className="relative min-h-screen overflow-hidden bg-white">
        {/* ===== Hero Section ===== */}
        <section className="relative w-full flex flex-col items-center justify-center bg-amber-200/50">
          <div className="relative w-full h-[calc(100vh-64px)] md:h-auto md:min-h-[600px] flex items-center justify-center overflow-hidden">
            <img
              src="/women/home1.jpg"
              alt="STELLA for Women"
              className="w-full h-200 object-cover md:object-contain"
            />

            {/* 🌙 التدرج الأسود على الصورة فقط */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* النص والأزرار */}
            <div className="absolute text-white text-center px-4 md:px-6 top-1/2 -translate-y-1/2">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest mb-4 drop-shadow-lg">
                STELLA FOR WOMEN
              </h1>
              <p className="text-base md:text-xl mb-6 max-w-md mx-auto drop-shadow-md">
                Discover timeless elegance and modern style.
              </p>
              <Link
                href={"/women/clothing"}
                className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Sale Section ===== */}
        <section className="bg-gradient-to-r from-amber-50 via-white to-amber-50">
          <SectionSale />
        </section>

        {/* ===== Clothing Carousel ===== */}
        <section className="relative z-10 bg-white py-10">
          <Swiperclothing />
        </section>
        <section className="relative z-10 bg-white py-10">
          <AccessoriesShop />
        </section>
       
        {/* ===== Trending Section ===== */}
        <section className="relative z-10 bg-amber-50/60 py-10">
          <Trending />
        </section>

        {/* ===== Bags Promo Section ===== */}
        <section className="relative z-10 bg-white py-10">
          <ShopBags />
        </section>

        {/* ===== New In Section ===== */}
        <section id="newin" className="relative z-10 bg-amber-50/60 py-10">
          <Newin />
        </section>

        {/* ===== Purchase Promo Banner ===== */}
        <section className="bg-gradient-to-r from-amber-100 via-white to-amber-100 py-12">
          <PurchasePromoBanner />
        </section>
      </div>
    </>
  );
};

export default HomeWomen;