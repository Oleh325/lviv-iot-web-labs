import React from "react";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import Footer from "./Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
          <>
            <Header />
            <Home />
          </>
          } />
          <Route exact path="/catalog" element={
          <>
            <Header />
            <Catalog />
          </>
          } />            
          <Route exact path="/cart" element={
          <>
            <Header />
            <Cart />
          </>
          } /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
