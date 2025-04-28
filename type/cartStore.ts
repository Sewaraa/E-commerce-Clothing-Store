import { CartItems } from "@/type/cart"

export type CartStore={
    items:CartItems[],
    addToCart:(item:CartItems)=>void;
    removeFromCart:(id:string)=>void;
    clearCart:()=>void;
    totalItems:()=>number;
    totalPrice:()=>number
}
