import React from 'react'

const Trending = () => {
  const TrendingData = [
    { title: "Velvet Dress", image: "/women/trending/VelvetDress.jpg" },
    { title: "Elegant Suit", image: "/women/trending/suit.jpg" },
    { title: "Leather Shoes", image: "/women/trending/shoes.jpg" },
    { title: "Gold Bracelet", image: "/women/trending/geld.jpg" },
  ];

  return (
 <section className="py-10 px-4 md:px-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-amber-900/90">Trending</h2>
      
      <div className="grid grid-cols-2 md:flex md:space-x-8 gap-6 justify-center">
        {TrendingData.map((trend, index) => (
          <div key={index} className="flex flex-col items-center mx-auto">
            <div className="w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden mb-2 flex items-center justify-center">
              <img 
                src={trend.image} 
                alt={trend.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-center text-sm md:text-base lg:text-lg font-medium">{trend.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;