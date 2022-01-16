import { useSelector, useDispatch } from "react-redux";
import { toggleDarkModeActions } from "../../Store/toggleDarkModeSlice";

const useNavbarLogic = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.toggleDarkMode.darkMode);

  const themeToggler = () => {
    dispatch(toggleDarkModeActions.toggleDarkMode());
  };

  return { darkMode, themeToggler };
};

export default useNavbarLogic;
