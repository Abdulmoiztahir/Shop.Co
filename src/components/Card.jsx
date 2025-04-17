import { Link } from "react-router-dom";

export default function Card({ id, name, price, image }) {
  return (
    <div className="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-auto flex flex-col">
      <Link to={`/product/${id}`}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={image}
          alt={name}
        />
      </Link>

      <div className="p-4 flex flex-col justify-between flex-1">
        <Link to={`/product/${id}`}>
          <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white break-words">
            {name}
          </h5>
        </Link>

        <p className="mb-3 font-medium text-gray-700 dark:text-gray-400 text-base">
          {price}
        </p>

        <Link
          to={`/product/${id}`}
          className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          See Details
          <svg
            className="w-3 h-3 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
