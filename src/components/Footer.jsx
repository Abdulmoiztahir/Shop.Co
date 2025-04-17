import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Shop.co</h2>
          <p className="text-gray-400">
            Shop the latest fashion trends with comfort and class. Premium quality at your fingertips.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaFacebookF className="text-xl hover:text-gray-300" /></a>
            <a href="#"><FaInstagram className="text-xl hover:text-gray-300" /></a>
            <a href="#"><FaTwitter className="text-xl hover:text-gray-300" /></a>
            <a href="#"><FaYoutube className="text-xl hover:text-gray-300" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Men</a></li>
            <li><a href="#" className="hover:text-white">Women</a></li>
            <li><a href="#" className="hover:text-white">Kids</a></li>
            <li><a href="#" className="hover:text-white">New Arrivals</a></li>
            <li><a href="#" className="hover:text-white">Best Sellers</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Order Tracking</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers and news.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md text-white border-1"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-r-md font-semibold border-yellow-500 border-1">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-6 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Shop.co — All rights reserved.</p>
        <div className="mt-4 md:mt-0">
          <img src="#" alt="Payment Methods" className="h-6" />
        </div>
      </div>
    </footer>
  );
}
