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
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers,
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
