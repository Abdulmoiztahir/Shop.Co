import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import ReviewSlider from "../components/ReviewSlider";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import { addToCart } from "../utils/cartUtils";

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:4000/api/products?id=${id}`
        );
        setProduct(data);
        setSelectedSize(data.size);
      } catch (err) {
        console.error("Error fetching product:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <h2 className="text-center text-xl mt-20">Loading…</h2>;
  if (!product)
    return <h2 className="text-center text-xl mt-20">No Product Found</h2>;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    setToastMessage(`${product.name} has been added to your cart!`);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={product.image}
                  alt={`thumb-${i}`}
                  className="w-20 h-20 rounded-lg object-cover opacity-60 hover:opacity-100 transition"
                />
              ))}
            </div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md rounded-xl"
            />
          </div>

          <div>
            <div className="text-sm text-gray-500 mb-2">
              Home &gt; Shop &gt; {product.name}
            </div>
            <h1 className="text-3xl font-extrabold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-600 text-sm">4.5</span>
            </div>
            <div className="text-2xl font-bold text-black mb-4">
              ${product.price}
            </div>
            <p className="text-gray-600 mb-6">
              Stylish {product.style} item in size {product.size}, color{" "}
              {product.color}.
            </p>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Color</h3>
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: product.color }}
              />
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <button
                className="px-4 py-1 border rounded-full bg-black text-white"
                onClick={() => setSelectedSize(product.size)}
              >
                {product.size}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded px-3 py-2">
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                  -
                </button>
                <span className="px-2">{quantity}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>+</button>
              </div>
              <button
                className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 cursor-pointer"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}
      <ReviewSlider text="Reviews" mode="grid" />
      <Footer />
    </>
  );
}
