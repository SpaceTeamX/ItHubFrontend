import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const axiosUser = createAsyncThunk("userData/axiosUserData", async () => {
  console.log(data);
  const response = await axios.get(
    "https://ktotonekt.pythonanywhere.com/api/me/account/" , { }
    //   {auth:}
  );
  return response.data;
});

const initialState = {};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
});
