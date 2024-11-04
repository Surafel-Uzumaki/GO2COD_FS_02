import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundImage:
          "url('https://c0.wallpaperflare.com/preview/789/637/166/backlit-chiemsee-dawn-desktop-backgrounds.jpg')",
        backgroundSize: "cover", // Use 'cover' to fill the entire screen
        backgroundPosition: "center",
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-70 shadow-lg p-8 max-w-md text-center border border-gray-300 rounded">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to O Store!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your one-stop shop for managing products online.
          </p>

          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition duration-200 transform hover:scale-105"
            >
              View Products
            </Link>

            <Link
              to="/edit-products"
              className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-400 transition duration-200 transform hover:scale-105"
            >
              Edit Products
            </Link>

            <Link
              to="/post-product"
              className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-500 transition duration-200 transform hover:scale-105"
            >
              Post New Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
