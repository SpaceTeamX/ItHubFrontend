import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navItemId: "",
};

const navBarSlice = createSlice({
  name: "navBar",
  initialState,
  reducers: {
    setNavItemId: (state, action) => {
      state.navItemId = action.payload;
    },
  },
});

export const { setNavItemId } = navBarSlice.actions;
export default navBarSlice.reducer;
