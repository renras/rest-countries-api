import React from "react";

import styles from "./Navbar.module.css";
import ToggleDarkMode from "./Components/ToggleDarkMode/ToggleDarkMode";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <h1>Where in the world?</h1>
      <ToggleDarkMode />
    </header>
  );
};

export default Navbar;
