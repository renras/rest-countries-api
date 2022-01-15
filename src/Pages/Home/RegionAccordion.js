import React from "react";

import styles from "./RegionAccordion.module.css";
import { FaChevronDown } from "react-icons/fa";
import useFetch from "./RegionAccordionLogic";
import RegionAccordionContent from "./RegionAccordionContent";

const RegionAccordion = () => {
  const {
    toggleAccordion,
    activeRegion,
    showAccordion,
    regions,
    changeActiveRegion,
  } = useFetch();

  return (
    <div className={styles.regionAccordion}>
      <button className={styles.regionHeader} onClick={toggleAccordion}>
        <p>{activeRegion}</p>
        <FaChevronDown className={styles.chevronDown} />
      </button>
      <RegionAccordionContent
        showAccordion={showAccordion}
        regions={regions}
        changeActiveRegion={changeActiveRegion}
        styles={styles}
      />
    </div>
  );
};

export default RegionAccordion;
