import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, filtersSlice, searchSlice } from "./slices";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filters: filtersSlice.reducer,
        search: searchSlice.reducer
    }
});

export default store;