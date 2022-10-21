import React from "react";
import Header from "./Header/Header";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Footer from "./Footer/Footer";
import Item from "../Item/Item";
import CatalogHandler from "../Catalog/CatalogHandler";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const catsArray = [
  {id: 1,
  title: "Cat 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
  price: "2415",
  cuteness: 69,
  color: "white",
  weight: 4.5,
  options: ["Cute", "Super cute"],
  imagesrc: "https://cataas.com/cat"
  },
  {id: 2,
    title: "Cat 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: "2410",
    cuteness: 70,
    color: "black",
    weight: 6.5,
    options: ["Cute", "Super cute", "Cool"],
    imagesrc: "https://cataas.com/cat"
  },
  {id: 3,
    title: "Cat 23",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: "2405",
    cuteness: 71,
    color: "tabby",
    weight: 2.7,
    options: ["Cute", "Super cute"],
    imagesrc: "https://cataas.com/cat"
  },
  {id: 4,
    title: "Cat 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui",
    price: "2400",
    cuteness: 100,
    color: "white",
    weight: 5,
    options: ["Nice", "Cute", "Super cute"],
    imagesrc: "https://cataas.com/cat"
    },
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
          <CatalogHandler catsArray={catsArray} />
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
              <Item catsArray={catsArray} />
            </>
          } /> 
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
