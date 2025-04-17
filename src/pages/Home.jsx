import Card from "../components/Card";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/navbar";
import img from "../assets/Rectangle 2 (1).png"; 
import ReviewSlider from "../components/ReviewSlider";
import BrandBar from "../components/BrandBar";

const newArrivals = [
  { id: 1, name: "Oversized Hoodie", price: "$59.99", image: img },
  { id: 2, name: "Classic White Tee", price: "$29.99", image: img },
  { id: 3, name: "Denim Jeans", price: "$49.99", image: img },
  { id: 4, name: "Leather Sneakers", price: "$89.99", image: img },
];

const topSellings = [
  { id: 5, name: "Slim Fit Chinos", price: "$45.00", image: img },
  { id: 6, name: "Printed Shirt", price: "$39.99", image: img },
  { id: 7, name: "Casual Jacket", price: "$79.99", image: img },
  { id: 8, name: "Cotton Polo", price: "$34.99", image: img },
];

export function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <BrandBar />

      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 text-center mt-8">
        New Arrival
      </h1>
      <div className="flex justify-center gap-6 flex-wrap">
        {newArrivals.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>

      <hr className="mt-8 mx-8" />

      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 text-center mt-8">
        Top Sellings
      </h1>
      <div className="flex justify-center gap-6 flex-wrap mt-8">
        {topSellings.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

      {/* Gallery & Footer */}
      <div className="mt-10">
        <Gallery />
      </div>
      <div>
        <ReviewSlider text={"What Our Customers Say"} />
      </div>
      <Footer />
    </>
  );
}
