import img from "../assets/Rectangle 2 (1).png";

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-3xl shadow-lg">
      <h2 className="text-2xl md:text-4sxl font-extrabold text-center mb-8 text-black">
        {" "}
        BROWSE BY DRESS STYLE{" "}
      </h2>
      <div className="relative h-[600px]">
        <img
          src={img}
          alt="Style 1"
          className="absolute top-0 left-4 w-64 h-74 object-cover rounded-xl shadow-xl rotate-[-5deg] z-10"
        />

        <img
          src={img}
          alt="Style 2"
          className="absolute top-8 right-4 w-74 h-72 object-cover rounded-2xl shadow-lg rotate-[3deg] z-20"
        />

        <img
          src={img}
          alt="Style 3"
          className="absolute bottom-0 left-20 w-72 h-80 object-cover rounded-xl shadow-2xl rotate-2 z-30"
        />

        <img
          src={img}
          alt="Style 4"
          className="absolute bottom-6 right-12 w-72 h-72 object-cover rounded-2xl shadow-xl rotate-[-3deg] z-20"
        />

        <img
          src={img}
          alt="Style 5"
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-72 h-74 object-cover rounded-xl shadow-lg rotate-2 z-30"
        />

        <img
          src={img}
          alt="Style 6"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-72 h-64 object-cover rounded-xl shadow-lg rotate-[-2deg] z-20"
        />
      </div>
    </div>
  );
}
