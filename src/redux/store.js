import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navBarSlice";
import singUpReducer from "./singupSlice";




export const store = configureStore({
    reducer: {
        navBar: navBarReducer,
        singup: singUpReducer,
    }
})