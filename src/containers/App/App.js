import React from "react";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Item from "../Item/Item";
import Catalog from "../Catalog/Catalog";
import Checkout from "../Cart/Checkout/Checkout";
import Success from "../Cart/Success/Success";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import LayoutDefault from "./LayoutDefault";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LayoutDefault />}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/catalog" element={<Catalog />} />            
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/cart/checkout" element={<Checkout />} /> 
                <Route exact path="/cart/success" element={<Success />} />  
                <Route path="/item/:id" element={ <Item  />} /> 
            </Route>

            <Route path="/" element={<Layout />}>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
            </Route>
        </Routes>
    );
}

export default App;
