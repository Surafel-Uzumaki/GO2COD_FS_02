import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { items, totalPrice } = state;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-8">Shopping Cart</h2>
      {items.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center border-b border-gray-300 py-4 mb-4"
            >
              <img
                src={`http://localhost:5000/uploads/${item.image}`}
                alt={item.name}
                className="w-20 h-20 mr-4 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-gray-700 mb-1">
                  Price: ${(item.price / 100).toFixed(2)}
                </p>
                <p className="text-gray-700 mb-2">Quantity: {item.quantity}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => {
                      const newQuantity = item.quantity - 1;
                      if (newQuantity <= 0) {
                        dispatch({ type: "REMOVE_FROM_CART", payload: item });
                      } else {
                        dispatch({
                          type: "UPDATE_CART_QUANTITY",
                          payload: { _id: item._id, quantity: newQuantity },
                        });
                      }
                    }}
                    className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: "UPDATE_CART_QUANTITY",
                        payload: { _id: item._id, quantity: item.quantity + 1 },
                      })
                    }
                    className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
                    }
                    className="px-3 py-1 bg-red-500 text-white rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h3 className="text-right text-xl font-semibold mt-8">
            Total Price: ${(totalPrice / 100).toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
