import { createSlice } from "@reduxjs/toolkit";
import { addFilter,
    removeFilter,
    removeAllFilters } from "../actions/filtersActions";

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filtersList: []
    },
    reducers: { addFilter, removeFilter, removeAllFilters }
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice;