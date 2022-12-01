import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import filtersSlice from "./slices/filtersSlice";
import searchSlice from "./slices/searchSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        filters: filtersSlice.reducer,
        search: searchSlice.reducer,
        auth: authSlice.reducer
    },
    devTools: true
});

export default store;