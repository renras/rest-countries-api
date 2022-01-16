import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../Store/appSlice";

const useHome = () => {
  const searchBarText = useSelector((state) => state.app.searchBarText);
  const dispatch = useDispatch();
  const regions = useSelector((state) => state.app.regions);

  const activeRegion = useSelector((state) => state.app.activeRegion);

  const searchBarHandleChange = (e) => {
    dispatch(appActions.updateSearchBarText(e.target.value));
  };

  const changeActiveRegion = (region) => {
    dispatch(appActions.changeActiveRegion(region));
  };

  return {
    searchBarText,
    regions,
    activeRegion,
    searchBarHandleChange,
    changeActiveRegion,
  };
};

export default useHome;
