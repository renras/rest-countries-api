import { useState } from "react";

import styles from "./DropdownMenu.module.css";
import { FaChevronDown } from "react-icons/fa";
import DropdownMenuContent from "./DropdownMenuContent";

const RegionAccordion = ({ content, selectItemHandler, activeRegion }) => {
  const [showAccordion, setShowAccordion] = useState(false);

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div className={styles.regionAccordion}>
      <div className={styles.regionHeader} onClick={toggleAccordion}>
        <p>{activeRegion}</p>
        <FaChevronDown className={styles.chevronDown} />
      </div>
      <DropdownMenuContent
        showAccordion={showAccordion}
        content={content}
        selectItemHandler={selectItemHandler}
        toggleAccordion={toggleAccordion}
        styles={styles}
      />
    </div>
  );
};

export default RegionAccordion;
