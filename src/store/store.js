import { configureStore } from "@reduxjs/toolkit";
import { cartSlice, filtersSlice, searchSlice } from "./reducers";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filters: filtersSlice.reducer,
        search: searchSlice.reducer
    }
});

export default store;