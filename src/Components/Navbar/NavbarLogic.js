import { useSelector, useDispatch } from "react-redux";
import { navbarActions } from "../../Store/navbarSlice";

const useNavbarLogic = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.navbar.darkMode);

  const themeToggler = () => {
    dispatch(navbarActions.toggleDarkMode());
  };

  return { darkMode, themeToggler };
};

export default useNavbarLogic;
