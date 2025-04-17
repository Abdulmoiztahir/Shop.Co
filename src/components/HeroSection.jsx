import backgroundImage from "../assets/Rectangle 2.png";
import mobileBackgroundImage from "../assets/Rectangle 2 (1).png";

export default function HeroSection() {
  return (
    <section
      className="w-full h-[600px] bg-cover bg-[80%] md:bg-center flex items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="max-w-screen-xl mx-auto px-4 w-full">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-black text-lg mb-6">
            Shop the best styles for men and women. Quality guaranteed with fast
            shipping and easy returns.
          </p>
          <button className=" px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
