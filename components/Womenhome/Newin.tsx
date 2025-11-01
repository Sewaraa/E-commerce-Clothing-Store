import React from 'react';

const Newin = () => {
  const newInData = [
    { title: "Silk Dress", image: "/women/newin/silk-dress.jpg" },
    { title: "Summer Hat", image: "/women/newin/summer-hat.jpg" },
    { title: "Leather Bag", image: "/women/newin/leather-bag.jpg" },
    { title: "Sneakers", image: "/women/newin/sneakers.jpg" },
  ];

  return (
    <section className="py-10 px-4 md:px-8 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">New In</h2>
      
      <div className="grid grid-cols-2 md:flex md:space-x-6 gap-6 justify-center">
        {newInData.map((item, index) => (
          <div key={index} className="flex flex-col items-center mx-auto">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden mb-3 transition-transform duration-300 hover:scale-105">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-center text-sm md:text-base font-medium">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newin;