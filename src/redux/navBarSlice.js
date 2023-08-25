import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navItemId: '',
  activeVacancyForm: false,
};

const navBarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavItemId: (state, action) => {
      state.navItemId = action.payload;
    },
    setActiveVacancyForm: (state, action) => {
      state.activeVacancyForm = action.payload 
    }

  },
});

export const { setNavItemId, setActiveVacancyForm } = navBarSlice.actions;
export default navBarSlice.reducer;
