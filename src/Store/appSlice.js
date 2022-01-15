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
    searchBarText: "",
    borderCountries: [],
  },
  reducers: {
    updateSearchBarText(state, action) {
      state.searchBarText = action.payload;
    },
    filterCountries(state, action) {
      let { searchBarText, activeRegion } = action.payload;
      let newCountries = state.countries.filter((country) => {
        return (
          country.name.toLowerCase().includes(searchBarText.toLowerCase()) &&
          country.region === activeRegion
        );
      });
      if (activeRegion === "Filter by Region") {
        newCountries = state.countries.filter((country) => {
          return country.name
            .toLowerCase()
            .includes(searchBarText.toLowerCase());
        });
      }
      state.filteredCountries = newCountries;
    },
    setBorderCountries(state, action) {
      state.borderCountries = action.payload;
      console.log(action.payload);
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
