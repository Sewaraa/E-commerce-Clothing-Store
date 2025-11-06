import { Product } from "@/type/product";

export const sampleData: Product[] = [
  // ================= Swipe Products =================
  {
    id: '1',
    title: "Stella DESIGN Hoodie",
    description: "Soft cotton hoodie with minimalistic Stella design, perfect for casual wear.",
    price: 45.00,
    category: "WomenSwipClothing",
    image: "/women/swip/s1.jpg",
    rating: { rate: 4.1, count: 50 },
    sale: true,
    salePrice: 35.00
  },
  {
    id: '2',
    title: "Tailored Blazer",
    description: "Elegant tailored blazer, ideal for office or evening wear.",
    price: 85.00,
    category: "WomenSwipClothing",
    image: "/women/swip/s2.jpg",
    rating: { rate: 4.5, count: 30 },
    sale: false
  },
  {
    id: '3',
    title: "STELLA Borg Sneakers",
    description: "Trendy borg sneakers for ultimate comfort and style.",
    price: 75.00,
    category: "WomenSwipClothing",
    image: "/women/swip/s3.jpg",
    rating: { rate: 4.3, count: 40 },
    sale: true,
    salePrice: 60.00
  },
  {
    id: '4',
    title: "STELLA Casual Jacket",
    description: "Lightweight jacket with cozy lining for everyday outings.",
    price: 75.00,
    category: "WomenSwipClothing",
    image: "/women/swip/s4.jpg",
    rating: { rate: 4.3, count: 40 },
    sale: false
  },
  {
    id: '5',
    title: "STELLA Winter Coat",
    description: "Warm winter coat with stylish design and practical pockets.",
    price: 75.00,
    category: "WomenSwipClothing",
    image: "/women/swip/s5.jpg",
    rating: { rate: 4.3, count: 40 },
    sale: true,
    salePrice: 65.00
  },
  {
    id: '6',
    title: "Black Evening Dress",
    description: "Classic black dress perfect for formal events or dinners.",
    price: 120.00,
    category: "WomenSwipClothingdress",
    image: "/women/swip/blackdress.jpg",
    rating: { rate: 4.6, count: 40 },
    sale: false
  },
  {
    id: '7',
    title: "Royal Velvet Pajamas",
    description: "Luxurious velvet pajamas set for a cozy and elegant night.",
    price: 95.00,
    category: "WomenSwipClothing",
    image: "/women/swip/RoyalvelvetPajamas.jpg",
    rating: { rate: 4.7, count: 35 },
    sale: false
  },

  // ================= Trending =================
  {
    id: '8',
    title: "Velvet Evening Dress",
    description: "Stunning velvet dress with flattering silhouette for special occasions.",
    price: 120.00,
    category: "WomenTrendingDresses",
    image: "/women/trending/VelvetDress.jpg",
    rating: { rate: 4.6, count: 60 },
    sale: true,
    salePrice: 100.00
  },
  {
    id: '9',
    title: "Elegant Power Suit",
    description: "Sophisticated power suit with sharp tailoring for confident style.",
    price: 200.00,
    category: "WomenTrendingClothing",
    image: "/women/trending/suit.jpg",
    rating: { rate: 4.7, count: 45 },
    sale: false
  },
  {
    id: '10',
    title: "Leather Ankle Boots",
    description: "Premium leather boots perfect for trendy outfits and comfort.",
    price: 90.00,
    category: "WomenTrendingShoes",
    image: "/women/trending/shoes.jpg",
    rating: { rate: 4.5, count: 50 },
    sale: true,
    salePrice: 70.00
  },
  {
    id: '11',
    title: "Gold Bracelet",
    description: "Elegant gold bracelet adding sparkle and sophistication to any look.",
    price: 150.00,
    category: "WomenTrendingAccessories",
    image: "/women/trending/geld.jpg",
    rating: { rate: 4.8, count: 40 },
    sale: false
  },

 // ================= New In =================
{
  id: '12',
  title: "Bootcut Jeans",
  description: "Classic bootcut jeans with a comfortable fit and timeless style.",
  price: 150.00,
  category: "WomenNewInClothing",
  image: "/women/newin/home2.jpg",
  rating: { rate: 4.8, count: 40 },
  sale: true,
  salePrice: 120.00
},
{
  id: '13',
  title: "High Waist Jeans",
  description: "Trendy high-waist jeans, perfect for pairing with crop tops or blouses.",
  price: 150.00,
  category: "WomenNewInClothing",
  image: "/women/newin/home3.jpg",
  rating: { rate: 4.8, count: 40 },
  sale: false
},
{
  id: '14',
  title: "Wool Winter Jacket",
  description: "Cozy wool jacket to keep you warm with a chic and elegant look.",
  price: 340.00,
  category: "WomenNewInClothing",
  image: "/women/newin/Elegntjacke.jpg",
  rating: { rate: 4.8, count: 40 },
  sale: true,
  salePrice: 290.00
},
{
  id: '15',
  title: "Pink Denim Shorts",
  description: "Stylish pink denim shorts perfect for summer and casual outings.",
  price: 100.00,
  category: "WomenNewInClothing",
  image: "/women/newin/pink.jpg",
  rating: { rate: 4.8, count: 40 },
  sale: false
},

// ================= Jewelry & Shoes =================
{
  id: '16',
  title: " Diamond Jewelry Set",
  description: "Luxurious diamond jewelry set including a bracelet, necklace, and earrings.",
  price: 800.00,
  category: "WomenAccessoriesJewelry",
  image: "/women/accessories/diamondset.jpg", 
  rating: { rate: 4.9, count: 55 },
  sale: true,
  salePrice: 699.00
},
{
  id: '17',
  title: "Exquisite Diamond Ring",
  description: "Elegant diamond ring featuring a stunning centerpiece for special occasions.",
  price: 350.00,
  category: "WomenAccessoriesJewelry",
  image: "/women/accessories/diamondring.jpg", 
  rating: { rate: 4.8, count: 60 },
  sale: false
},
{
  id: '18',
  title: " Green Gemstone Necklace",
  description: "Graceful green gemstone necklace that adds a luxurious touch to any look.",
  price: 270.00,
  category: "WomenAccessoriesJewelry",
  image: "/women/accessories/greengemostone.jpg", 
  rating: { rate: 4.7, count: 45 },
  sale: true,
  salePrice: 230.00
},
{
  id: '19',
  title: "Bold Gold Statement Earrings",
  description: "Eye-catching gold statement earrings with bold modern design.",
  price: 180.00,
  category: "WomenAccessoriesJewelry",
  image: "/women/accessories/goldearrings.jpg", 
  rating: { rate: 4.6, count: 30 },
  sale: false
},
//shoes
{
  id: '20',
  title: "Chic White Summer Sandals",
  description: "Light and stylish white sandals, perfect for a breezy summer look.",
  price: 90.00,
  category: "WomenShoesSummer",
  image: "/women/shoes/whitesandal.jpg", 
  rating: { rate: 4.5, count: 35 },
  sale: true,
  salePrice: 75.00
},
{
  id: '21',
  title: "Classic Black Heels",
  description: "Timeless black heels designed for comfort and elegance.",
  price: 120.00,
  category: "WomenShoesHeels",
  image: "/women/shoes/blackheels.jpg",
  rating: { rate: 4.7, count: 50 },
  sale: false
},
{
  id: '22',
  title: "Trendy Buckled Summer Heels",
  description: "Trendy summer heels with buckle design and open-toe comfort.",
  price: 110.00,
  category: "WomenShoesHeels",
  image: "/women/shoes/summerheels.jpg", // ← أضف المسار هنا
  rating: { rate: 4.6, count: 42 },
  sale: true,
  salePrice: 95.00
},
{
  id: '23',
  title: "Premium Black Leather Boots",
  description: "High-quality black leather boots for stylish winter outfits.",
  price: 220.00,
  category: "WomenShoesBoots",
  image: "", // ← أضف المسار هنا
  rating: { rate: 4.8, count: 70 },
  sale: false
},
{
  id: '24',
  title: "Classic Brown Leather Boots",
  description: "Elegant brown leather boots with premium craftsmanship.",
  price: 210.00,
  category: "WomenShoesBoots",
  image: "/women/shoes/brownboots.jpg", // ← أضف المسار هنا
  rating: { rate: 4.7, count: 65 },
  sale: true,
  salePrice: 180.00
},
{
  id: '25',
  title: "Chic Black Ankle Boots",
  description: "Trendy black ankle boots perfect for modern street style.",
  price: 180.00,
  category: "WomenShoesBoots",
  image: "", // ← أضف المسار هنا
  rating: { rate: 4.6, count: 50 },
  sale: false
},
{
  id: '26',
  title: "Elegant Summer Sandal Heels",
  description: "Beautiful summer sandal heels with a touch of elegance for warm days.",
  price: 130.00,
  category: "WomenShoesHeels",
  image: "/women/shoes/Trendybuckledheels.jpg", // ← أضف المسار هنا
  rating: { rate: 4.8, count: 55 },
  sale: true,
  salePrice: 115.00
},
// ================= Bags =================
{
  id: '27',
  title: "Modern Elegant Tote Bag",
  description: "Sophisticated modern tote bag crafted from premium materials — perfect for daily wear or the office.",
  price: 190.00,
  category: "WomenBags",
  image: "/women/bags/modernbag.jpg",
  rating: { rate: 4.7, count: 45 },
  sale: true,
  salePrice: 160.00
},
{
  id: '28',
  title: "Classic Brown Leather Bag",
  description: "Timeless brown leather bag designed with clean lines and durable craftsmanship for everyday use.",
  price: 220.00,
  category: "WomenBags",
  image: "/women/bags/brownbag.jpg",
  rating: { rate: 4.8, count: 60 },
  sale: false
},
{
  id: '29',
  title: "Soft Blush Pink Handbag",
  description: "Chic blush pink handbag with minimalist gold details — ideal for elevating casual or evening looks.",
  price: 175.00,
  category: "WomenBags",
  image: "/women/bags/pinkbag.jpg",
  rating: { rate: 4.6, count: 38 },
  sale: true,
  salePrice: 145.00
},
{
  id: '30',
  title: "White Structured Mini Bag",
  description: "Elegant mini white bag with structured design and top handle — a must-have modern accessory.",
  price: 160.00,
  category: "WomenBags",
  image: "/women/bags/whitebag.jpg",
  rating: { rate: 4.5, count: 42 },
  sale: false
},
{
  id: '31',
  title: "Blue Croc-Effect Shoulder Bag",
  description: "Trendy blue shoulder bag with croc-effect texture and metallic details for a bold statement look.",
  price: 185.00,
  category: "WomenBags",
  image: "/women/bags/bluebag.jpg",
  rating: { rate: 4.7, count: 50 },
  sale: true,
  salePrice: 160.00
},
];