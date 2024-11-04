import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import EditProduct from "./pages/EditProduct"; 
import EditSingleProduct from "./pages/EditSingleProduct"; 


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/edit-products" element={<EditProduct />} />
        <Route path="/edit/:id" element={<EditSingleProduct />} />{" "}
        {/* New route for editing a single product */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
