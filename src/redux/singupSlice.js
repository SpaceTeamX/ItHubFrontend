import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios";

export const axiosAuth = createAsyncThunk("singup/axiosAuthData", async (userData) => {
  try {
    const { data } = await axios.post(`/users/auth/login/`, userData);

    if (data && data.token) {
      window.localStorage.setItem('token', data.token);
    }

    return data;

  } catch (error) {
    console.log(error);
  }

});

export const axiosSingUp = createAsyncThunk("singup/axiosSingUpData", async (userData) => {
  try {
    const { data } = await axios.post(`/users/auth/register/`, userData);

    if (data && data.token) {
      window.localStorage.setItem('token', data.token);
    }

    return data;

  } catch (error) {
    console.log(error);
  }

});

export const axiosGetUser = createAsyncThunk("singup/axiosGetUser", async () => {
  try {
    const { data } = await axios.get(`/users/me/profile/`);

    return data;

  } catch (error) {
    console.log(error);
  }
});

export const axiosChangeUser = createAsyncThunk("singup/axiosChangeUser", async (userData) => {
  try {
    const { data } = await axios.patch(`/users/me/profile/`, userData);

    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  token: "",
  user: "",
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
      state.user = action.payload;
    });

    builder.addCase(axiosChangeUser.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
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
