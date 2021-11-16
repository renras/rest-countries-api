import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

export const getCountries = createAsyncThunk(
  "countries/getCountries",
  async (dispatch, getState) => {
    return await Axios.get("https://restcountries.com/v2/all");
  }
);

const appSlice = createSlice({
  name: "app",
  initialState: {
    status: null,
    countries: [],
    filteredCountries: [],
  },
  reducers: {
    filterCountries(state, action) {
      let { textInput, activeRegion } = action.payload;

      let newCountries = state.countries.filter((country) => {
        return (
          country.name.toLowerCase().includes(textInput.toLowerCase()) &&
          country.region === activeRegion
        );
      });

      if (activeRegion === "Filter by Region") {
        newCountries = state.countries.filter((country) => {
          return country.name.toLowerCase().includes(textInput.toLowerCase());
        });
      }

      state.filteredCountries = newCountries;
    },
  },
  extraReducers: {
    [getCountries.pending]: (state, action) => {
      state.status = "loading";
    },
    [getCountries.fulfilled]: (state, action) => {
      state.status = "success";
      state.countries = action.payload.data;
      state.filteredCountries = action.payload.data;
    },
    [getCountries.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;
