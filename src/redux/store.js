import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "./navBarSlice";
import singUpReducer from "./singupSlice";

const store = configureStore({
  reducer: {
    navBar: navBarReducer,
    singup: singUpReducer
  },
});

export default store;
