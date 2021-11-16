import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { appActions } from "../../../../Store/appSlice";

const useFetch = () => {
  const dispatch = useDispatch();
  const filteredCountries = useSelector((state) => state.app.filteredCountries);
  const activeRegion = useSelector(
    (state) => state.regionAccordion.activeRegion
  );
  const textInput = useSelector((state) => state.searchBar.textInput);

  useEffect(() => {
    dispatch(appActions.filterCountries({ activeRegion, textInput }));
  }, [dispatch, activeRegion, textInput]);

  return { filteredCountries };
};

export default useFetch;
