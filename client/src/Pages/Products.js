import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import axios from "axios";

const Products = () => {
  const { dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state } = useCart();
  const { items } = state;

  const [expandedProduct, setExpandedProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

    product.addedToCart = true;

    setTimeout(() => {
      product.addedToCart = false;
      setProducts([...products]);
    }, 1000);
  };

  const toggleDescription = (id) => {
    if (expandedProduct === id) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(id);
    }
  };

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      {/* Centered heading */}
      <h1 className="text-3xl font-bold text-center my-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg shadow-lg mb-4"
          >
            <img
              src={`http://localhost:5000/uploads/${product.image}`}
              alt={product.name}
              className="w-full h-32 object-contain"
            />
            <h3 className="font-semibold">{product.name}</h3>

            <p
              onClick={() => toggleDescription(product._id)}
              className="cursor-pointer"
            >
              {expandedProduct === product._id
                ? product.description
                : `${product.description.slice(0, 50)}...`}
            </p>
            <p className="text-lg font-bold">
              ${(product.price / 100).toFixed(2)}
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-900"
            >
              Add to Cart
            </button>

            {product.addedToCart && (
              <div className="mt-2 text-red-500 font-semibold">
                Added to cart
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
