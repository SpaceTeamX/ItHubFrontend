import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const axiosAuth = createAsyncThunk(
  "singup/axiosAuthData",
  async (data) => {
    console.log(data);
    const response = await axios.post(
      "https://ktotonekt.pythonanywhere.com/api/users/auth/login/",
      data
      //   {auth:}
    );
    localStorage.setItem("token", response.data);

    return response.data;
  }
);

export const axiosSingUp = createAsyncThunk(
  "singup/axiosSingUpData",
  async (data) => {
    console.log(data);
    const response = await axios.post(
      "https://ktotonekt.pythonanywhere.com/api/users/auth/register/",
      data
      //   {auth:}
    );

    localStorage.setItem("token", response.data);

    return response.data;
  }
);

export const axiosGetUser = createAsyncThunk(
  "singup/axiosGetUserData",
  async (data) => {
    console.log(data);
    const response = await axios.post(
      "https://ktotonekt.pythonanywhere.com/api/users/auth/register/",
      data
      //   {auth:}
    );

    localStorage.setItem("token", response.data);

    return response.data;
  }
);

const initialState = {
  token: localStorage.getItem("token"),
  status: "",
  error: "",
};

const singUpSice = createSlice({
  name: "singup",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.removeItem("token");
      state.token = ''
    }
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

    builder.addCase(axiosSingUp.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
    });
    builder.addCase(axiosAuth.rejected, (state) => {
      state.status = "error";
    });
  },
});

export const { setSingUpData, setLogout } = singUpSice.actions;
export default singUpSice.reducer;

// При нажатии на войти будет отправка данных loading... и потом если успешно -> окно и редирект в профиль или основную станицу
