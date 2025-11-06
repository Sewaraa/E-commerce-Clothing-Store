import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const {
    items,
    totalItems,
    totalPrice,
    removeFromCart,
    clearCart,
    addToCart,
  } = useCartStore();

  useEffect(() => {
    setIsMounted(true);
    const unsubscribe = useCartStore.subscribe((state) => {});
    return () => unsubscribe();
  }, []);

  const removehandle = (id: string) => {
    removeFromCart(id);
    toast.success("Removed from cart! 🎉");
  };

  const clearcarthandler = () => {
    clearCart();
    toast.success("Cart cleared successfully!");
  };

  if (!isMounted) return null;

  return (
    <div className="max-w-5xl py-8 px-4 mx-auto pt-[80px]">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 tracking-tight">
        Shopping Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid md:grid-cols-[3fr_1fr] gap-4">
          <div className="space-y-4">
            <div className="space-y-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-gray-300 rounded-lg p-4 shadow-sm bg-white"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 object-contain border-gray-400 rounded-md"
                    />
                  )}

                  <div className="flex-1">
                    <h2 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h2>
                    <div className="flex items-center space-x-2 border border-gray-200 rounded-lg w-fit px-3 py-1 mt-2">
                      <button
                        className="px-2 hover:bg-gray-200 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => addToCart({ ...item, quantity: -1 })}
                        disabled={item.quantity <= 1}
                        aria-label="Reduce the quantity by 1"
                      >
                        -
                      </button>
                      <div className="px-2 text-sm font-medium text-gray-700 border-x border-gray-300">
                        {item.quantity}
                      </div>
                      <button
                        className="px-2 hover:bg-gray-200 rounded"
                        onClick={() => addToCart({ ...item, quantity: 1 })}
                        aria-label="Increase the quantity by 1"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end h-full">
                    <button
                      className="text-red-500 hover:text-red-700 transition"
                      onClick={() => removehandle(item.id)}
                      aria-label="Remove item"
                    >
                      <FaTrash />
                    </button>
                    <div className="font-semibold text-gray-800 mt-5 text-xl">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t grid grid-cols-2 gap-4">
              <button
                className="bg-black hover:bg-red-600 text-white font-semibold rounded shadow px-6 py-2 transition "
                onClick={clearcarthandler}
                aria-label="Remove all items"
              >
                <FaTrash className="inline mr-2" /> Clear Cart
              </button>
              <Link
                href="/checkout"
                className="bg-black hover:bg-indigo-700 text-white font-semibold rounded shadow px-6 py-2 transition inline-flex items-center justify-center"
              >
                <MdShoppingCartCheckout className="mr-2" size={22} />
                Checkout
              </Link>
            </div>
          </div>
          <div className="space-y-4 ml-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-700">Summary</h2>
            </div>
            <div className="text-gray-500 border-b border-b-gray-300 text-xl font-semibold py-3">
              Total items: <span className="text-gray-800">{totalItems()}</span>
            </div>
            <div className="text-gray-600 text-xl font-bold">
              Total Price:{" "}
              <div className="text-4xl font-bold text-gray-800 border-b border-b-gray-300 py-3">
                ${totalPrice().toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
