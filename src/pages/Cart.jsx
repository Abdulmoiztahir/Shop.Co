import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { products } from "../data/product";

const getCartItems = () => {
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  return cartData.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return {
      ...product,
      quantity: cartItem.quantity,
      size: cartItem.size,
    };
  });
};

export default function Cart() {
  const [items, setItems] = useState(getCartItems());

  useEffect(() => {
    const cartToSave = items.map(({ id, quantity, size }) => ({
      id,
      quantity,
      size,
    }));
    localStorage.setItem("cart", JSON.stringify(cartToSave));
  }, [items]);

  const handleIncreaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setItems(
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalPrice = items.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );
  const discount = 0.2 * totalPrice;
  const deliveryFee = 15;
  const totalAfterDiscount = totalPrice - discount + deliveryFee;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <nav className="text-sm text-gray-500 mb-4">Home &gt; Cart</nav>
        <h1 className="text-3xl font-bold mb-6">YOUR CART</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {items.map((item) => (
              <div key={item.id} className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded mr-4"
                      src={item.image}
                    />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <p className="text-lg font-semibold">${item.price}</p>
                    <div className="flex items-center ml-4">
                      <button
                        className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        className="bg-gray-200 text-gray-600 rounded-full w-8 h-8 flex items-center justify-center"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-red-500 ml-4"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <i className="fas fa-trash"></i>
                      <span className="ml-1">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Discount (20%)</span>
                <span className="text-red-500 font-semibold">
                  -${discount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Delivery Fee</span>
                <span className="font-semibold">${deliveryFee}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total</span>
                <span className="font-semibold">
                  ${totalAfterDiscount.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center mb-4">
                <input
                  className="flex-1 p-2 border border-gray-300 rounded-l-lg"
                  placeholder="Add promo code"
                  type="text"
                />
                <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg">
                  Apply
                </button>
              </div>
              <button className="bg-black text-white w-full py-3 rounded-lg">
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
