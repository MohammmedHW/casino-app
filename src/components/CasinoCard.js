import React from "react";
import { Link } from "react-router-dom";

const CasinoCard = ({
  id,
  image,
  title,
  depositBonus,
  welcomeBonus,
  rating,
  visits,
}) => {
  const starCount = Math.floor(rating);
  const totalStars = 5;

  // Create a URL-friendly slug from the title
  const slug = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <div
        className="casino-card bg-cover w-full max-w-6xl bg-center p-6 flex flex-col md:flex-row justify-center md:justify-between m-3 border-2 border-black300 rounded-lg shadow-md"
        style={{ backgroundColor: "#1d1d1d" }}
      >
        <div className="casino-info flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0 text-center md:text-left">
          <img
            src={image}
            alt={title}
            className="w-40 h-28 object-contain rounded-md"
          />

          <div className="space-y-2 md:space-y-6 pl-0 md:pl-10">
            <p className="text-gray-400">
              Deposit Bonus:{" "}
              <span className="block text-white">{depositBonus}</span>
            </p>
            <p className="text-gray-400">
              Welcome Bonus:{" "}
              <span className="block text-white">{welcomeBonus}</span>
            </p>
          </div>
        </div>
        <div className="casino-stats flex flex-col items-center text-center space-y-4 mt-4 lg:mt-5 md:mt-0">
          <p className="text-red-500 text-xl md:text-2xl font-bold">{rating}</p>
          <div className="flex justify-center">
            {Array(totalStars)
              .fill()
              .map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 md:w-6 md:h-6 mr-1"
                  fill={index < starCount ? "red" : "white"}
                  stroke={index < starCount ? "black" : "red"}
                  strokeWidth="1"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
          </div>
        </div>
        <div className="casino-stats flex flex-col items-center md:items-end text-center md:text-right space-y-4 mt-4 lg:mt-5 md:mt-0">
          <p className="text-gray-400">{visits} Has Already Visited!</p>
          <Link
            to={`/casinos/${slug}`}
            state={{ casinoId: id }}
            className="bg-red-600 hover:bg-red-800 text-white px-12 py-2 md:px-16 md:py-3 rounded-lg text-center"
          >
            Play now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CasinoCard;
