import {Swiper, SwiperSlide} from "swiper/react"
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { SwipProd } from "@/type/SwipProd"


const SwiperSlid = ({products}:SwipProd) => {
  return (
    <Swiper
   spaceBetween={10}  slidesPerView={'auto'} 
   grabCursor={true} modules={[Pagination]} pagination={{clickable:true }}
   className='pb-6'>
     {products.map((product, index) => (
          
          <SwiperSlide key={index} className='!w-[150px] sm:!w-[200px]'>
            <div className='flex flex-col'>
              <img
                src={product.image}
                alt={product.title}
                className='w-full h-[320px] rounded-md object-cover mb-2'
              />
              {/* تفاصيل المنتج */}
              <p className='text-xs font-semibold leading-snug truncate'>{product.title}</p>
              <p className='text-xs text-gray-600 mb-1 truncate'>{product.desc}</p>
              <p className='text-sm font-bold'>{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
       
  </Swiper>
  )
}

export default SwiperSlid