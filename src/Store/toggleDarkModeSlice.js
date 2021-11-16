import { createSlice } from "@reduxjs/toolkit";

const initialToggleDarkModeState = {
  darkMode: false,
};

const toggleDarkModeSlice = createSlice({
  name: "navbar",
  initialState: initialToggleDarkModeState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      if (!state.darkMode) {
        document.documentElement.style.setProperty("--main-bg", "#fafafa");
        document.documentElement.style.setProperty("--secondary-bg", "#fff");
        document.documentElement.style.setProperty("--text-white", "#545454");
        document.documentElement.style.setProperty(
          "--shadow",
          "0 0 10px 0 rgba(0, 0, 0, 0.1)"
        );
      }
      if (state.darkMode) {
        document.documentElement.style.setProperty("--main-bg", "#212e37");
        document.documentElement.style.setProperty("--secondary-bg", "#46535d");
        document.documentElement.style.setProperty("--text-white", "#f2f2f2");
        document.documentElement.style.setProperty(
          "--shadow",
          "0 0 20px 0 rgba(0, 0, 0, 0.5)"
        );
      }
    },
  },
});

export const toggleDarkModeActions = toggleDarkModeSlice.actions;

export default toggleDarkModeSlice.reducer;