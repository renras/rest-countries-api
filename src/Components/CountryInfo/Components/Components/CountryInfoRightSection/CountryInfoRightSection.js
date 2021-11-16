import React from "react";

const CountryInfoRightSection = ({
  currentCountry,
  getCurrencies,
  languages,
}) => {
  return (
    <ul>
      <li>
        <b>Top Level Domain</b>: {currentCountry.topLevelDomain}
      </li>
      {getCurrencies() && (
        <li>
          <b>Currencies</b>: {getCurrencies()}{" "}
        </li>
      )}
      <li>
        <b>Languages</b>: {languages.join(", ")}
      </li>
    </ul>
  );
};

export default CountryInfoRightSection;
