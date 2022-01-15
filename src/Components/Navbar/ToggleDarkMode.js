import React from "react";

import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import styles from "./ToggleDarkMode.module.css";
import useFetch from "./ToggleDarkModeLogic";

const ToggleDarkMode = () => {
  const { darkMode, toggleDarkMode } = useFetch();
  return (
    <>
      {darkMode ? (
        <button className={styles.darkMode} onClick={toggleDarkMode}>
          <BsFillSunFill className={styles.moon} />
          <p>Light Mode</p>
        </button>
      ) : (
        <button className={styles.darkMode} onClick={toggleDarkMode}>
          <FaMoon className={styles.moon} />
          <p>Dark Mode</p>
        </button>
      )}
    </>
  );
};

export default ToggleDarkMode;
