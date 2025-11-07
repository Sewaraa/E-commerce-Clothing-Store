import React from 'react';
import { sampleData } from '@/data/sampleData';
import { Product } from '@/type/product';
import ProductCard from '@/components/ProductCart';
import SectionSale from '@/components/SectionSale';
import AccessoriesShop from '@/components/AccessoriesShop';



const ClothingPage = () => {
  const clothingProducts: Product[] = sampleData.filter(product =>
    product.category.toLowerCase().includes('clothing')
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 pt-[80px]">
        <section className='pb-6'>
         <SectionSale/>
        </section> 
       <section className='pb-6 mb-10'><AccessoriesShop/></section>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {clothingProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </div>
  );
};

export default ClothingPage;