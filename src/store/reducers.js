import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart, incrementItem, decrementItem, addFilter, removeFilter, removeAllFilters } from "./actions";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemsList: []
    },
    reducers: { addItemToCart, removeItemFromCart, incrementItem, decrementItem }
});

export const cartActions = cartSlice.actions;

export const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filtersList: []
    },
    reducers: { addFilter, removeFilter, removeAllFilters }
});

export const filtersActions = filtersSlice.actions;