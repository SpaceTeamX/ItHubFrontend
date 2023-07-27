import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navBarSlice";
import singUpReducer from "./singupSlice";
import authReducer from "./authSlice";


export const store = configureStore({
    reducer: {
        navBar: navBarReducer,
        singup: singUpReducer,
        auth: authReducer,
    }
})