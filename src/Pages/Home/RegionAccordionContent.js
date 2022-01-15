import React from "react";

const RegionAccordionContent = ({
  showAccordion,
  regions,
  changeActiveRegion,
  styles,
}) => {
  return (
    <div
      className={`${!showAccordion && styles.showAccordion} ${
        styles.regionsContainer
      }`}
    >
      <ul>
        {regions.map((region, index) => (
          <li onClick={() => changeActiveRegion(region)} key={index}>
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RegionAccordionContent;
