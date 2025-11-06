import React from 'react'
import SwiperSlid from '../SwiperSlide';
import { sampleData } from '@/data/sampleData';

const Swiperclothing = () => {
     const products=sampleData.filter(product=>product.category.includes('Swip'))
  return (
 <section className="py-10 px-4 md:px-8 bg-white">
      
          <h2 className="text-2xl font-bold mb-6 text-center text-amber-900/90">
            Discover: Our Picks This Week
          </h2>
       

        <SwiperSlid products={products} />
      </section>
  )
}

export default Swiperclothing