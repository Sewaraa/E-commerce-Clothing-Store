import React from 'react'
import SwiperSlid from '../SwiperSlide';

const Swiperclothing = () => {
      const products = [
     { title: "SOS DESIGN", desc: "Ill circle pu ski...", price: "£2.00", image: "/women/swip/s1.jpg" },
    { title: "ARRANGE TAILORED", desc: "high...", price: "£85.00", image: "/women/swip/s2.jpg" },
    { title: "ASOS | borg sn", desc: "...", price: "£75.00", image: "/women/swip/s3.jpg" },
    { title: "ASOS | borg sn", desc: "...", price: "£75.00", image: "/women/swip/s4.jpg" },
    { title: "SOS DESIGN", desc: "Ill circle pu ski...", price: "£2.00", image: "/women/swip/s1.jpg" },
    { title: "ARRANGE TAILORED", desc: "high...", price: "£85.00", image: "/women/swip/s2.jpg" },
    { title: "ASOS | borg sn", desc: "...", price: "£75.00", image: "/women/swip/s3.jpg" },
    { title: "ASOS | borg sn", desc: "...", price: "£75.00", image: "/women/swip/s4.jpg" },
    { title: "ASOS | borg sn", desc: "...", price: "£75.00", image: "/women/swip/s5.jpg" },
  ];
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