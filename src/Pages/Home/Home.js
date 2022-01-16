import React from "react";

import Country from "./Country";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import DropdownMenu from "../../Components/DropdownMenu/DropdownMenu";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../Store/appSlice";

const Home = () => {
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
        <Country />
      </div>
    </main>
  );
};

export default Home;
