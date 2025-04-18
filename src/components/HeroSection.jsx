import backgroundImage from "../assets/Rectangle 2.png";
import mobileBackgroundImage from "../assets/Rectangle 2 (1).png";

export default function HeroSection() {
  return (
    <>
      {/* Mobile view */}
      <section className="block md:hidden">
        {/* Text Box full width */}
        <div className="w-full bg-[#F2F0F1] bg-opacity-80 p-6">
          <h1 className="text-2xl font-extrabold text-black mb-3 leading-tight">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <p className="text-black text-sm mb-4">
            Shop the best styles for men and women. Quality guaranteed with fast
            shipping and easy returns.
          </p>
          <button className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Image full width */}
        <img
          src={mobileBackgroundImage}
          alt="Mobile Background"
          className="w-full object-cover"
        />
      </section>

      {/* Desktop view */}
      <section
        className="hidden md:flex w-full h-[600px] bg-cover bg-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4 w-full">
          <div className="w-1/2 text-left bg-[#F2F0F1] bg-opacity-80 p-6 rounded-lg">
            <h1 className="text-5xl font-extrabold text-black mb-4">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
            <p className="text-black text-lg mb-6">
              Shop the best styles for men and women. Quality guaranteed with
              fast shipping and easy returns.
            </p>
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
