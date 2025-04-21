export type Product = {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    price: number;
    oldPrice?: number;
    stock?: number;
    rating?: number;
    discount?: number;
  };