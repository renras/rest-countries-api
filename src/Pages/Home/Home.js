import React from "react";

import Countries from "./Countries";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import DropdownMenu from "../../Components/DropdownMenu/DropdownMenu";
import useHome from "./HomeLogic";

const Home = () => {
  const {
    searchBarText,
    regions,
    activeRegion,
    searchBarHandleChange,
    changeActiveRegion,
  } = useHome();

  return (
    <main className={styles.home}>
      <div className={styles.topOfSection}>
        <SearchBar
          searchBarText={searchBarText}
          onChange={searchBarHandleChange}
          placeHolder="Search for a country..."
        />
        <DropdownMenu
          content={regions}
          selectItemHandler={changeActiveRegion}
          activeRegion={activeRegion}
        />
      </div>
      <div className={styles.countries}>
        <Countries />
      </div>
    </main>
  );
};

export default Home;
