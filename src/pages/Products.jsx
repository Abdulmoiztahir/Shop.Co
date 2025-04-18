import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ReviewSlider from "../components/ReviewSlider";
import FilterSidebar from "../components/FilterSidebar";

const PRODUCTS_PER_PAGE = 6;

export function Products() {
  const [filters, setFilters] = useState({
    price: 200,
    color: [],
    size: [],
    style: [],
  });

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/category");
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err.message);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = selectedCategory
          ? `http://localhost:4000/api/products?category=${selectedCategory}`
          : "http://localhost:4000/api/products";
        const res = await axios.get(url);
        setAllProducts(res.data);
        setFiltered(res.data);
      } catch (err) {
        console.error("Error fetching products:", err.message);
      }
    };
    fetchProducts();
  }, [selectedCategory]);

  const handleFilter = () => {
    const result = allProducts.filter((product) => {
      const priceNum = parseFloat(product.price);
      return (
        priceNum <= filters.price &&
        (filters.color.length === 0 ||
          filters.color.includes(product.color?.toLowerCase())) &&
        (filters.size.length === 0 || filters.size.includes(product.size)) &&
        (filters.style.length === 0 ||
          filters.style.includes(product.style?.toLowerCase()))
      );
    });
    setFiltered(result);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filtered.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <>
      <Navbar />
      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 text-center mt-8">
        All Products
      </h1>

      <div className="flex justify-center mb-6">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          applyFilters={handleFilter}
        />

        <div className="flex-1">
          {filtered.length === 0 ? (
            <h2 className="text-center text-xl mt-20">No Products Found</h2>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <Card
                    key={product._id}
                    id={product._id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center mt-8 gap-4">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="font-semibold">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <ReviewSlider />
      <Footer />
    </>
  );
}
