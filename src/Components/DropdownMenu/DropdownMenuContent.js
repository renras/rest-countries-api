import React from "react";

const DropdownMenuContent = ({
  showAccordion,
  content,
  selectItemHandler,
  styles,
  toggleAccordion,
}) => {
  return (
    <div
      className={`${!showAccordion && styles.showAccordion} ${
        styles.regionsContainer
      }`}
    >
      <ul>
        {content.map((item, index) => (
          <li
            onClick={() => {
              selectItemHandler(item);
              toggleAccordion();
            }}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenuContent;
