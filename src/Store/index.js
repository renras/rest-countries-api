import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import navbarReducer from "./navbarSlice";
import regionAccordionReducer from "./regionAccordionSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    navbar: navbarReducer,
    regionAccordion: regionAccordionReducer,
  },
  middleware: [thunk],
});

export default store;
