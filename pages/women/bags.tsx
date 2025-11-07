import AccessoriesShop from '@/components/AccessoriesShop';
import ProductCard from '@/components/ProductCart';
import SectionSale from '@/components/SectionSale';

import { sampleData } from '@/data/sampleData';
import { Product } from '@/type/product';
import React from 'react'

const bags = () => {
   const dressesProducts: Product[] = sampleData.filter(product =>
          product.category.toLowerCase().includes('bags')
        );
      return (
         <div className="max-w-7xl mx-auto px-4 py-10 pt-[80px]">
          
          <SectionSale />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
            {dressesProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <AccessoriesShop/>
        </div>)
}

export default bags