import styles from "./Navbar.module.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import useNavbarLogic from "./NavbarLogic";

const Navbar = () => {
  const { darkMode, themeToggler } = useNavbarLogic();

  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <ThemeToggler
        icon={darkMode ? <BsFillSunFill /> : <FaMoon />}
        text={darkMode ? "Light Mode" : "Dark Mode"}
        themeToggler={themeToggler}
      />
    </header>
  );
};

export default Navbar;
