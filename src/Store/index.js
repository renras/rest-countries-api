import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import navbarReducer from "./navbarSlice";
import appReducer from "./appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    navbar: navbarReducer,
  },
  middleware: [thunk],
});

export default store;
