import ProductCard from '@/components/ProductCart'
import ShopBags from '@/components/ShopBags'
import { sampleData } from '@/data/sampleData'
import { Product } from '@/type/product'
import React from 'react'

const sale = () => {
    const productSale:Product[]=sampleData.filter(product=>product.sale)
  return (
    <div className='pt-[80px] py-10 px-4 mx-auto mzx-w-7xl'>
        <h1 className='text-3xl font-bold mb-6 text-center'>
            Sale - Spiecal Offers
        </h1>
        {productSale.length===0?(
            <p className='text-gray-500 '>NO Sales Items Right Now</p>):(
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
                    {productSale.map((product)=><ProductCard key={product.id} product={product}/>)}
                    </div>
            )}
  <section className='pb-6'><ShopBags/></section>
    </div>
  )
}

export default sale