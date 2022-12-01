import { createSlice } from "@reduxjs/toolkit";
import {
    addItemToCart,
    removeItemFromCart,
    incrementItem,
    decrementItem,
    clearCart } from "../actions/cartActions";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: []
    },
    reducers: { addItemToCart, removeItemFromCart, incrementItem, decrementItem, clearCart }
});

export const cartActions = cartSlice.actions;

export default cartSlice;