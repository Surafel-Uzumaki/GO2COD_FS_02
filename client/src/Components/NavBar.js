import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          O Store
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
