import { createSlice } from "@reduxjs/toolkit";

const regionAccordionSlice = createSlice({
  name: "regionAccordion",
  initialState: {
    activeRegion: "Filter by Region",
    showAccordion: false,
    regions: [],
  },
  reducers: {
    changeActiveRegion(state, action) {
      state.activeRegion = action.payload;

      if (action.payload === "None") {
        state.activeRegion = "Filter by Region";
      }
    },
    showAccordion(state, action) {
      state.showAccordion = !state.showAccordion;
    },
    setRegions(state, action) {
      let countries = action.payload;
      let regions = [];

      countries.forEach((element) => {
        if (!regions.includes(element.region)) {
          regions.push(element.region);
        }
      });
      regions.push("None");
      state.regions = regions;
    },
  },
});

export const regionAccordionActions = regionAccordionSlice.actions;

export default regionAccordionSlice.reducer;
