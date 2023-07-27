import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosSingUp = createAsyncThunk(
  "singup/axiosSingUpData",
  async (data) => {
    console.log(data)
    const response = await axios.post('http://26.92.63.81:8000/api/users/auth/register/', data);
    return response.data;
  }
);

const initialState = {
  userData: "",
  islogin: false,
  status: "loading",
};

const singUpSice = createSlice({
  name: "singup",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(axiosSingUp.pending, (state) => {
      state.status = "loading";

    });

    builder.addCase(axiosSingUp.fulfilled, (state, action) => {
      state.status = "success";
      state.userData = action.payload;
    });

    builder.addCase(axiosSingUp.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { setSingUpData } = singUpSice.actions;
export default singUpSice.reducer;


// При нажатии на войти будет отправка данных loading... и потом если успешно -> окно и редирект в профиль или основную станицу