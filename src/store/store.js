import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, filtersSlice } from "./reducers";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filters: filtersSlice.reducer
    }
});

export default store;