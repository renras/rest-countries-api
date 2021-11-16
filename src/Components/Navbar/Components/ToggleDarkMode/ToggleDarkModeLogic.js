import { useSelector, useDispatch } from "react-redux";
import { toggleDarkModeActions } from "../../../../Store/toggleDarkModeSlice";

const useFetch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.toggleDarkMode.darkMode);

  const toggleDarkMode = () => {
    dispatch(toggleDarkModeActions.toggleDarkMode());
  };

  return { darkMode, toggleDarkMode };
};

export default useFetch;
