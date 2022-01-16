import React from "react";

import Country from "./Country";
import SearchBar from "../../Components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import RegionAccordion from "./RegionAccordion";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "../../Store/appSlice";

const Home = () => {
  const searchBarText = useSelector((state) => state.app.searchBarText);
  const dispatch = useDispatch();

  const searchBarHandleChange = (e) => {
    dispatch(appActions.updateSearchBarText(e.target.value));
  };

  return (
    <section className={styles.home}>
      <div className={styles.topOfSection}>
        <SearchBar
          searchBarText={searchBarText}
          onChange={searchBarHandleChange}
          placeHolder="Search for a country..."
        />
        <RegionAccordion />
      </div>
      <div className={styles.countries}>
        <Country />
      </div>
    </section>
  );
};

export default Home;
