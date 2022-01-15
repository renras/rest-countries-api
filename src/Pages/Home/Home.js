import React from "react";

import Country from "./Country";
import SearchBar from "./SearchBar";
import styles from "./Home.module.css";
import RegionAccordion from "./RegionAccordion";

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
