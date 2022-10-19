import React from "react";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import Footer from "./Footer/Footer";
import Item from "../Item/Item";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const catsArray = [
  {title: "Amazing stuff",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
  price: "2415",
  imagesrc: "https://cataas.com/cat",
  id: 1},
  {title: "Amazing stuff",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
  price: "2415",
  imagesrc: "https://cataas.com/cat",
  id: 2},
  {title: "Amazing stuff",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
  price: "6969",
  imagesrc: "https://cataas.com/cat",
  id: 3},
  {title: "Amazing stuff",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
  price: "2415",
  imagesrc: "https://cataas.com/cat",
  id: 4},
  {title: "Amazing stuff",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
  price: "priceless",
  imagesrc: "https://cataas.com/cat",
  id: 5}
]

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
            <Catalog catsArray={catsArray} />
          </>
          } />            
          <Route exact path="/cart" element={
          <>
            <Header />
            <Cart />
          </>
          } /> 
          <Route exact path="/item/:id" element={
          <>
            <Header />
            <Item />
          </>
          } /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
