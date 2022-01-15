import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../../../Store/appSlice";

const useFetch = () => {
  const dispatch = useDispatch();
  const searchBarText = useSelector((state) => state.app.searchBarText);
  const filteredCountries = useSelector((state) => state.app.filteredCountries);
  const activeRegion = useSelector(
    (state) => state.regionAccordion.activeRegion
  );

  useEffect(() => {
    dispatch(appActions.filterCountries({ activeRegion, searchBarText }));
  }, [dispatch, activeRegion, searchBarText]);

  return { filteredCountries, searchBarText };
};

export default useFetch;
