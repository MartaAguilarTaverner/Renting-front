import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    email: "",
    name: "",
    isAdmin: false,
    subscribed: false,
    token: "",
};

const reducers = {
    login: (state, action) => {
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.name = action.payload.name;
        state.isAdmin = action.payload.isAdmin;
        state.subscribed = action.payload.subscribed;
        state.token = action.payload.token;
    },
    logout: (state) => {
        state.id = 0;
        state.email = "";
        state.name = "";
        state.isAdmin = false;
        state.subscribed = false;
        state.token = "";
    },
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers,
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
