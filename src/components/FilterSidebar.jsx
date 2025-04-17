import React from "react";

const sizes = ["S", "M", "L", "XL", "32", "34", "One Size"];
const styles = [
  "casual",
  "formal",
  "sports",
  "denim",
  "printed",
  "winter",
  "ethnic",
  "utility",
];

export default function FilterSidebar({ filters, setFilters, applyFilters }) {
  const toggleArrayValue = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow w-full md:w-64">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Price Range</label>
        <input
          type="range"
          min={0}
          max={200}
          value={filters.price}
          onChange={(e) => setFilters({ ...filters, price: e.target.value })}
          className="w-full"
        />
        <div className="text-sm mt-1">Up to ${filters.price}</div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-2">Size</label>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`border px-3 py-1 rounded ${
                filters.size.includes(size) ? "bg-black text-white" : "bg-white"
              }`}
              onClick={() => toggleArrayValue("size", size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Style</label>
        <div className="flex flex-wrap gap-2">
          {styles.map((style) => (
            <button
              key={style}
              className={`border px-3 py-1 rounded capitalize ${
                filters.style.includes(style)
                  ? "bg-black text-white"
                  : "bg-white"
              }`}
              onClick={() => toggleArrayValue("style", style)}
            >
              {style}
            </button>
          ))}
        </div>
      </div>

      <button
        className="w-full bg-black text-white py-2 rounded"
        onClick={() => applyFilters()}
      >
        Apply Filters
      </button>
    </div>
  );
}
