import React from "react";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Footer from "./Footer/Footer";
import Item from "../Item/Item";
import Catalog from "../Catalog/Catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/catalog" element={<Catalog />} />            
          <Route exact path="/cart" element={<Cart />} /> 
          <Route path="/item/:id" element={ <Item  />} /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
