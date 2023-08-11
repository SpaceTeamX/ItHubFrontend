import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";

export const axiosAuth = createAsyncThunk(
  "singup/axiosAuthData",
  async (data) => {

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
   
    const response = await axios.post(
      `https://ktotonekt.pythonanywhere.com/api/users/auth/register/`,
      data
      //   {auth:}
    );

    return response.data;
  }
);

export const axiosGetUser = createAsyncThunk(
  "singup/axiosGetUser",
  async (data) => {
    try {
      
      const response = await axios.get(
        `https://ktotonekt.pythonanywhere.com/api/users/me/profile/`,
        {
          headers: {
            Authorization: "Token " + data,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const axiosChangeUser = createAsyncThunk(
  "singup/axiosChangeUser",
  async (data, token) => {
    console.log('data', data)
    console.log('token', token)
    try {
      
      const response = await axios.patch(
        `https://ktotonekt.pythonanywhere.com/api/users/me/profile/`,
        {
          headers: {
            Authorization: "Token " + token,
          },
          data: data
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
    setLogout: (state, action) => {
      state.token = null;
      state.user = "";
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
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    });

    builder.addCase(axiosGetUser.fulfilled, (state, action) => {
      state.status = "success";
      state.userData = action.payload;
    });

    builder.addCase(axiosChangeUser.fulfilled, (state, action) => {
      state.status = "success";
      state.userData = action.payload;
    });


    builder.addCase(axiosGetUser.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload;
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
