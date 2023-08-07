import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const axiosAuth = createAsyncThunk(
  "singup/axiosAuthData",
  async (data) => {
    console.log(data);
    const response = await axios.post(
      "https://ktotonekt.pythonanywhere.com/api/users/auth/login/",
      data, 
    //   {auth:}
    );
    return response.data;
  }
);


export const axiosSingUp = createAsyncThunk(
  "singup/axiosSingUpData",
  async (data) => {
    console.log(data);
    const response = await axios.post(
      "https://ktotonekt.pythonanywhere.com/api/users/auth/register/",
      data, 
    //   {auth:}
    );
    return response.data;
  }
);


const initialState = {
  token: "",
  status: "",
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
    builder.addCase(axiosAuth.pending, (state) => {
      state.status = "loading";
     
    });

    builder.addCase(axiosSingUp.fulfilled, (state, action) => {
      state.status = "success";
      state.token = action.payload;
    });
    builder.addCase(axiosAuth.fulfilled, (state, action) => {
      state.status = "success";
      state.token = action.payload;
    });

    builder.addCase(axiosSingUp.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(axiosAuth.rejected, (state) => {
      state.status = "error"; 
    });
  },
});

export const { setSingUpData } = singUpSice.actions;
export default singUpSice.reducer;

// При нажатии на войти будет отправка данных loading... и потом если успешно -> окно и редирект в профиль или основную станицу
