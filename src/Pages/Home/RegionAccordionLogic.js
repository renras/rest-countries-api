import { useEffect } from "react";

import { regionAccordionActions } from "../../Store/regionAccordionSlice";
import { useSelector, useDispatch } from "react-redux";

const useFetch = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.app.countries);
  const regions = useSelector((state) => state.regionAccordion.regions);
  const activeRegion = useSelector(
    (state) => state.regionAccordion.activeRegion
  );
  const showAccordion = useSelector(
    (state) => state.regionAccordion.showAccordion
  );

  const changeActiveRegion = (region) => {
    dispatch(regionAccordionActions.changeActiveRegion(region));
    dispatch(regionAccordionActions.showAccordion());
  };

  const toggleAccordion = () => {
    dispatch(regionAccordionActions.showAccordion());
  };

  useEffect(() => {
    dispatch(regionAccordionActions.setRegions(countries));
  }, [dispatch, countries]);
  return {
    toggleAccordion,
    activeRegion,
    showAccordion,
    regions,
    changeActiveRegion,
  };
};

export default useFetch;
