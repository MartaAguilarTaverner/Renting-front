import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./User/store/user.store";

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
