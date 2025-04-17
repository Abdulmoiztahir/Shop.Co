import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ali Khan",
    review: "Amazing product quality, very satisfied with the purchase!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sara Ahmed",
    review: "Fast delivery and awesome customer support. Highly recommend!",
    rating: 4,
  },
  {
    id: 3,
    name: "Usman Sheikh",
    review: "Perfect fit and fabric. Will shop again!",
    rating: 5,
  },
  {
    id: 4,
    name: "Ayesha Malik",
    review: "Loved the designs, totally worth the price!",
    rating: 4,
  },
  {
    id: 5,
    name: "Bilal Raza",
    review: "Quality is good but delivery was a bit slow.",
    rating: 3,
  },
  {
    id: 6,
    name: "Hina Shah",
    review: "The best online shopping experience I’ve had.",
    rating: 5,
  },
  {
    id: 7,
    name: "Hina Shah",
    review: "The best online shopping experience I’ve had.",
    rating: 5,
  },
  {
    id: 8,
    name: "Hina Shah",
    review: "The best online shopping experience I’ve had.",
    rating: 5,
  },
  {
    id: 9,
    name: "Hina Shah",
    review: "The best online shopping experience I’ve had.",
    rating: 5,
  },
  {
    id: 10,
    name: "Hina Shah",
    review: "The best online shopping experience I’ve had.",
    rating: 5,
  },
];

export default function ReviewSlider({ text, mode = "scroll" }) {
  const isScroll = mode === "scroll";

  return (
    <div className="mt-16 px-4 md:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">{text}</h2>

      <div
        className={`${
          isScroll
            ? "flex overflow-x-auto gap-4 no-scrollbar"
            : "flex flex-wrap justify-center gap-5"
        }`}
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className={`${
              isScroll
                ? "min-w-[280px] max-w-[280px] flex-shrink-0"
                : "w-[280px]"
            } bg-white rounded-2xl p-6 shadow-md border border-gray-100 min-h-[220px]`}
          >
            <div className="flex items-center mb-3 gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-700">
                {review.name[0]}
              </div>
              <span className="font-semibold">{review.name}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">"{review.review}"</p>
            <div className="flex text-yellow-500">
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
