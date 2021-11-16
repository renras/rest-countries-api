import React from "react";

import Country from "./Components/Country/Country";
import SearchBar from "./Components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import RegionAccordion from "./Components/RegionAccordion/RegionAccordion";

const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.topOfSection}>
        <SearchBar />
        <RegionAccordion />
      </div>
      <div className={styles.countries}>
        <Country />
      </div>
    </section>
  );
};

export default Home;
