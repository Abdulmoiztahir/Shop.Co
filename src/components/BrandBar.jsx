export default function BrandBar() {
  const brands = [
    { name: "Versace", font: "font-serif" },
    { name: "Zara", font: "font-mono" },
    { name: "Gucci", font: "font-semibold" },
    { name: "Prada", font: "font-extrabold" },
    { name: "Calvin Klein", font: "font-light" },
  ];

  return (
    <div className="bg-black py-6">
      <div className="max-w-6xl mx-auto flex justify-center gap-16 flex-wrap px-4">
        {brands.map((brand, index) => (
          <button
            key={index}
            className={`text-white text-3xl ${brand.font} tracking-wide hover:text-gray-300 transition duration-200 cursor-pointer`}
          >
            {brand.name}
          </button>
        ))}
      </div>
    </div>
  );
}
