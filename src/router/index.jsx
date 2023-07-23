import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import { CartProvider } from "react-use-cart";
function Router() {
  return (
    <div>
      <CartProvider>
        <div className="flex md:flex-row flex-col">
          <div className="w-full xl:w-[23%] lg:w-[25%] md:w-[35%]">
            <Navbar />
          </div>
          <div className="w-full xl:w-[77%] lg:w-[75%] md:w-[65%]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product" element={<Product />} />
              <Route path="/contact" element={<Checkout />} />
              <Route path="/table" element={<Cart />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default Router;
