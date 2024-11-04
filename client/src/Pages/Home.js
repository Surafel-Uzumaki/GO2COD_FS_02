import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to O Store!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop shop for managing products online.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <Link
            to="/products"
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition duration-200"
          >
            View Products
          </Link>

          <Link
            to="/edit-products"
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Edit Products
          </Link>

          <Link
            to="/post-product"
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Post New Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
