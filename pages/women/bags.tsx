import ProductCard from '@/components/ProductCart';
import { sampleData } from '@/data/sampleData';
import { Product } from '@/type/product';
import React from 'react'

const bags = () => {
   const dressesProducts: Product[] = sampleData.filter(product =>
          product.category.toLowerCase().includes('bags')
        );
      return (
         <div className="max-w-7xl mx-auto px-4 py-10 pt-[80px]">
          <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Bags</h1>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {dressesProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>)
}

export default bags