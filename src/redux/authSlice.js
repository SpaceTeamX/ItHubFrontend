import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const axiosAuth = createAsyncThunk(
  "auth/axiosAuthData",
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

const initialState = {
  authData: "",
  status: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
        state.authData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(axiosAuth.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(axiosAuth.fulfilled, (state, action) => {
      state.status = "success";
      state.authData = action.payload;
    });

    builder.addCase(axiosAuth.rejected, (state) => {
      state.status = "error";
    });
  },
});

export default authSlice.reducer;
