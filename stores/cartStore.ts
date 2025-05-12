import { CartItems } from "@/type/cart";
import { CartStore } from "@/type/cartStore";
import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware"
export const useCartStore=create<CartStore>()(
  persist(
    (set,get)=>({
    items:[],
    addToCart:(newitem:CartItems)=>{
      const items=get().items;
      const existing=items.find((i:CartItems)=>i.id===newitem.id)
      if(existing){
        const newquantity=existing.quantity+newitem.quantity;
        set({
          items:items.map((i:CartItems)=>i.id===newitem.id?{...i,quantity:newquantity}:i)
        })
      }else{
        if(newitem.quantity>0)
        {set({items:[...items,newitem]});}
        
      }

    },
    removeFromCart:(id:string)=>{
      set({
        items:get().items.filter((i:CartItems)=>i.id !==id)
      })
    },

    clearCart:()=>{
      set({items:[]},false);
      if(typeof window !=="undefined"){
      localStorage.removeItem('cart-storage');
      }
    },
    totalItems:()=>{
      return get().items.reduce((sum,i)=>sum+i.quantity,0);},
    totalPrice:()=>{
      return get().items.reduce((sum,i)=>sum+i.price * i.quantity,0);},

   


  }),
  {
    name:'cart-storage',
    storage: createJSONStorage(()=>localStorage),
  }
)
);