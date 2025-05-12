import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { checkoutSchema } from "@/schema/checkoutSchema";
import { CheckoutData } from "@/type/checkout";
import toast from "react-hot-toast";
const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutData>({
    resolver: yupResolver(checkoutSchema as yup.ObjectSchema<CheckoutData>),
  });
  const onSubmit = (data: CheckoutData) => {
    toast.success("Order placed successfully");
    reset()
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/*FullName */}
      <div className="flex flex-col">
        <label
          htmlFor="fullname"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          {...register("fullname")}
          className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition duration-150"
          placeholder="Enter your full name.."
        />
        {errors.fullname &&(<span className="text-red-500 text-sm mt-1">{errors.fullname.message}</span>)}
      </div>
      {/*Email */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Enter your email.."
          className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition duration-150"
        />
        {errors.email &&(<span className="text-red-500 mt-1 text-sm">{errors.email.message}</span>)}
      </div>
      {/* Address */}
      <div className="flex flex-col">
        <label htmlFor="address"
        className="text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input 
        id='address'
        {...register('address')}
        type="text"
        className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition duration-150"
        placeholder="Enter your address.."/>
        {errors.address &&(<span className="text-red-500 mt-1 text-sm">{errors.address.message}</span>)}
      </div>
      {/*Phone number */}
      <div className="flex flex-col">
        <label htmlFor="phone"
        className="text-sm font-medium text-gray-700 mb-1">
        Phone Number
        </label>
        <input
        id="phone"
        {...register('phone')}
        type='text'
        className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition duration-150"
        placeholder="Enter your phone.."/>
         {errors.phone &&(<span className="text-red-500 mt-1 text-sm">{errors.phone.message}</span>)}
      </div>
      {/*Notes */}
      <div className="flex flex-col">
       <label htmlFor="notes"
       className="text-sm font-medium text-gray-700 mb-1">
        Notes (Optional)
        </label>
        <textarea
        id="notes"
        placeholder="Any additional instructions!"
        {...register('notes')}
        className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition duration-150"/> 
        {errors.notes &&(<span className="text-red-500 mt-1 text-sm">{errors.notes.message}</span>)}
       </div>
       {/*submit button */}
       <button type="submit" className="w-full bg-black text-white font-semibold py-3 rounded hover:bg-gray-800 transition">
        Place Order
       </button>
    </form>
  );
};

export default CheckoutForm;
