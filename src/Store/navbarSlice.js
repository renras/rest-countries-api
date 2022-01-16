import { createSlice } from "@reduxjs/toolkit";

const initialNavbarState = {
  darkMode: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState: initialNavbarState,
  reducers: {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
      document.documentElement.style.setProperty(
        "--main-bg",
        `${state.darkMode ? "#212e37" : "#fafafa"}`
      );
      document.documentElement.style.setProperty(
        "--secondary-bg",
        `${state.darkMode ? "#46535d" : "#fff"}`
      );
      document.documentElement.style.setProperty(
        "--text-white",
        `${state.darkMode ? "#f2f2f2" : "#545454"}`
      );
      document.documentElement.style.setProperty(
        "--shadow",
        `${
          state.darkMode
            ? "0 0 20px 0 rgba(0, 0, 0, 0.5)"
            : "0 0 10px 0 rgba(0, 0, 0, 0.1)"
        }`
      );
    },
  },
});

export const navbarActions = navbarSlice.actions;

export default navbarSlice.reducer;
