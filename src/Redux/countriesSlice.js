import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const res = await axios.get("https://restcountries.com/v2/all?fields=name,region,flag");
  return res.data;
});

const countriesSlice = createSlice({
  name: "countries",
  initialState: { data: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => { state.status = "loading"; })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      });
  },
});

export default countriesSlice.reducer;
