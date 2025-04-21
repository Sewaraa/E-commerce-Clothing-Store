import { Product } from "@/type/product";


export const products: Product[] = [
  {
    id: "1",
    title: "Classic White Shirt",
    description: "Elegant white cotton shirt for formal or casual wear. Made with breathable fabric and premium stitching.",
    image:  "https://i.imghippo.com/files/VpHt3479Cw.jpg",
    price: 39.99,
    oldPrice: 49.99,
    discount: 20,
    rating: 4.5,
    stock: 0,
    category: "Men",
  },
  {
    id: "2",
    title: "Green Jacket",
    description: "Stylish and comfortable green jacket for women. Perfect for daily wear with a soft lining and modern cut.",
    image: "https://i.imghippo.com/files/hQO2536cWs.jpg",
    price: 69.99,
    rating: 4.2,
    stock: 0,
    category: "Women",
  },
  {
    id: "3",
    title: "Beige Coat",
    description: "Elegant beige coat for women. Made from high-quality wool blend, features a classic cut and smooth inner lining. Ideal for both casual and formal occasions.",
    image: "https://i.imghippo.com/files/hT4621gOY.jpg",
    
    price: 29.99,
    oldPrice: 39.99,
    discount: 25,
    rating: 4.8,
    stock: 5,
    category: "Women",
  },
  {
    id: "4",
    title: "Sporty Black Hoodie",
    description: "Cozy hoodie with fleece lining and front pocket. Perfect for workouts and chilly evenings.",
    image: "https://i.imghippo.com/files/INkr4215Xpg.jpg",
    price: 59.99,
    rating: 4.6,
    stock: 20,
    category: "Unisex",
  }
];