import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../../../Store/appSlice";

const useFetch = () => {
  const text = useSelector((state) => state.app.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(appActions.updateSearchBarText(e.target.value));
  };

  return { text, handleChange };
};

export default useFetch;
