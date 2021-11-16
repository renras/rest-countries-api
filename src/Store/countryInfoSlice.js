import { createSlice } from "@reduxjs/toolkit";

const countryInfoSlice = createSlice({
  name: "countryInfo",
  initialState: {
    borderCountries: [],
  },
  reducers: {
    setBorderCountries(state, action) {
      const borderCountries = action.payload;
      state.borderCountries = borderCountries;
    },
  },
});

export const countryInfoActions = countryInfoSlice.actions;

export default countryInfoSlice.reducer;
