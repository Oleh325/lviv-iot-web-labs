import { createSlice } from "@reduxjs/toolkit";
import { setCredentials, logOut } from "../actions/authActions";


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: "",
        token: "",
        roles: []
    },
    reducers: { setCredentials, logOut }
});

export const authActions = authSlice.actions;

export default authSlice;