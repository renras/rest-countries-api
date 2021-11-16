import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {},
  reducers: {},
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
