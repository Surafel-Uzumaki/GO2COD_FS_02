import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  totalPrice: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item._id === newItem._id);

      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item._id === newItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...newItem, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        totalPrice: calculateTotalPrice(updatedItems),
      };

    case "REMOVE_FROM_CART":
      const itemsAfterRemoval = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      return {
        ...state,
        items: itemsAfterRemoval,
        totalPrice: calculateTotalPrice(itemsAfterRemoval),
      };

    case "UPDATE_CART_QUANTITY":
      const { _id, quantity } = action.payload;
      const itemsWithUpdatedQuantity = state.items.map((item) =>
        item._id === _id ? { ...item, quantity } : item
      );
      return {
        ...state,
        items: itemsWithUpdatedQuantity,
        totalPrice: calculateTotalPrice(itemsWithUpdatedQuantity),
      };

    default:
      return state;
  }
}

function calculateTotalPrice(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
