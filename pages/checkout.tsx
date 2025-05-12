import CheckoutForm from "@/components/CheckoutForm";
import { MdShoppingCartCheckout } from "react-icons/md";

const CheckoutFormData=()=>{
    return (
        <div className="max-w-3xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">Checkout <span className="text-gray-600"><MdShoppingCartCheckout/></span> </h1>
          <CheckoutForm />
        </div>
      );
    };
export default CheckoutFormData;