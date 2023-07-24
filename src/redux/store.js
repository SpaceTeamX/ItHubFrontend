import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navBarSlice";


export const store = configureStore({
    reducer: {
        navBar: navBarReducer,
    }
})