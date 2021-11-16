import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import toggleDarkModeReducer from "./toggleDarkModeSlice";
import homeReducer from "./homeSlice";
import searchBarReducer from "./searchBarSlice";
import regionAccordionReducer from "./regionAccordionSlice";
import appReducer from "./appSlice";
import countryInfoReducer from "./countryInfoSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    toggleDarkMode: toggleDarkModeReducer,
    home: homeReducer,
    searchBar: searchBarReducer,
    regionAccordion: regionAccordionReducer,
    countryInfo: countryInfoReducer,
  },
  middleware: [thunk],
});

export default store;
