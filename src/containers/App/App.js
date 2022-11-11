import React from "react";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Footer from "./Footer/Footer";
import Item from "../Item/Item";
import CatalogHandler from "../Catalog/CatalogHandler";
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
          <CatalogHandler  />
          } />            
          <Route exact path="/cart" element={
          <>
            <Header />
            <Cart />
          </>
          } /> 
          <Route path="/item/:id" element={ 
            <>
              <Header />
              <Item  />
            </>
          } /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
