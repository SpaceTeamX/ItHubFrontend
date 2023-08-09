import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const axiosAuth = createAsyncThunk(
  "singup/axiosAuthData",
  async (data) => {
    console.log(data);
    const response = await axios.post(
      `https://ktotonekt.pythonanywhere.com/api/users/auth/login/`,
      data
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
      `https://ktotonekt.pythonanywhere.com/api/users/auth/register/`,
      data
      //   {auth:}
    );

    return response.data;
  }
);

// export const axiosGetUser = createAsyncThunk(
//   "singup/axiosGetUserData",
//   async (data) => {
//     console.log(data);
//     const response = await axios.get(
//       `${API}/api/users/me/profile/`,
//       {
//         headers: {
//           Authorization: localStorage.getItem("token"),
//         },
//       }
//       //   {auth:}
//     );

//     return response.data;
//   }
// );

const initialState = {
  token: "",
  user: "",
  userData: "",
  status: "",
  error: "",
  isLoggedIn: false,
};

const singUpSice = createSlice({
  name: "singup",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setLogout: (state, action) => {
      state.token = null;
      state.userData = "";
      state.isLoggedIn = false;
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
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
    builder.addCase(axiosAuth.fulfilled, (state, action) => {
      state.status = "success";
      state.token = action.payload;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });
    // builder.addCase(axiosGetUser.fulfilled, (state, action) => {
    //   state.status = "success";
    //   state.userData = action.payload;
    // });

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
