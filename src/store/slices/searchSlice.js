import { createSlice } from "@reduxjs/toolkit";
import { addSearch } from "../actions/searchActions";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        input: ""
    },
    reducers: { addSearch }
});

export const searchActions = searchSlice.actions;

export default searchSlice;