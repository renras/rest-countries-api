import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import toggleDarkModeReducer from "./toggleDarkModeSlice";
import regionAccordionReducer from "./regionAccordionSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    toggleDarkMode: toggleDarkModeReducer,
    regionAccordion: regionAccordionReducer,
  },
  middleware: [thunk],
});

export default store;
