import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "navbar",
  initialState: {
    textInput: "",
  },
  reducers: {
    handleChange(state, action) {
      state.textInput = action.payload;
    },
  },
});

export const searchBarActions = searchBarSlice.actions;

export default searchBarSlice.reducer;
