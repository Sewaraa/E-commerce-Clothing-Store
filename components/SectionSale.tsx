import Link from 'next/link'
import React from 'react'
import { motion, Variants } from 'framer-motion'

const SectionSale = () => {

  const floatAnimation: Variants = {
    animate: {
      y: [0, -25, 0],
      transition: {
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative z-10 py-16 text-center bg-gradient-to-r from-gray-50 via-amber-50 to-gray-50">
      
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 flex items-center justify-center gap-2">
         Limited Time Offer 
      </h2>

      <p className="text-gray-600 mb-6 text-lg">
        💖 Save up to <span className="font-semibold text-amber-600">30%</span> on selected styles 
      </p>

      <Link 
        href={'/women/sale'}
        className="inline-block bg-amber-500 text-white px-8 py-3 rounded-full font-semibold 
                   hover:bg-amber-600 hover:scale-105 transition-all duration-300 shadow-md"
      >
        🛍 Shop the Sale
      </Link>

   
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div variants={floatAnimation} animate="animate" className="absolute top-6 left-10 text-6xl">🛍</motion.div>
        <motion.div variants={floatAnimation} animate="animate" className="absolute bottom-8 right-10 text-6xl">👠</motion.div>
        <motion.div variants={floatAnimation} animate="animate" className="absolute bottom-1 left-1 text-5xl">💎</motion.div>
        <motion.div variants={floatAnimation} animate="animate" className="absolute bottom-1/2 left-1/2 text-5xl">👜</motion.div>
        <motion.div variants={floatAnimation} animate="animate" className="absolute top-8 right-10 text-5xl">👗</motion.div>
      </div>
    </section>
  )
}

export default SectionSale