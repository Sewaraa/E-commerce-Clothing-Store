import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Product } from "@/type/product";
import { motion } from "framer-motion";
import Link from "next/link";

type SwiperSlidProps = {
  products: Product[];
};

const SwiperSlid = ({ products }: SwiperSlidProps) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={"auto"}
      grabCursor={true}
      modules={[Pagination]}
      pagination={{ clickable: true }}
      className="pb-20"
    >
      {products.map((product, index) => (
        <SwiperSlide key={index} className="!w-[170px] sm:!w-[230px] flex">
          <Link href={`/product/${product.id}`} className="w-full">
            <motion.div
              className="flex flex-col bg-gradient-to-br from-white to-amber-50 rounded-xl shadow-lg p-4 cursor-pointer hover:shadow-2xl transition-all duration-300 pb-5"
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="w-full h-[240px] sm:h-[260px] mb-3 overflow-hidden rounded-lg border border-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="text-sm font-semibold leading-snug truncate text-gray-800 mb-1">
                {product.title}
              </p>
              <p className="text-xs text-gray-500 truncate mb-2">
                {product.description}
              </p>
              <motion.p
                className="text-lg font-bold text-amber-600"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                }}
              >
                ${product.price.toFixed(2)}
              </motion.p>
            </motion.div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlid;