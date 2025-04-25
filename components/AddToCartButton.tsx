'use client'
import { useCartStore } from "@/stores/cartStore";
import { CartItems } from "@/type/cart";
import { FaShoppingCart } from "react-icons/fa";
import  toast from 'react-hot-toast';
const AddToCartButton=({cart}:{cart:CartItems})=>{
    const addToCart=useCartStore((state)=>state.addToCart)
    const handleclick=()=>{
     addToCart({...cart,quantity:1})
     toast.success("Added to cart!")
    }
    return(
        <>
         <button
            aria-label={`Add ${cart.title} to cart`}
            className="bg-black inline-flex justify-center items-center text-white  font-semibold w-full rounded shadow transition mt-4 gap-2 hover:bg-green-600 py-3"
            onClick={handleclick}
          >
            {" "}
            <FaShoppingCart /> Add to cart
          </button>
        </>
    )


}
export default AddToCartButton;