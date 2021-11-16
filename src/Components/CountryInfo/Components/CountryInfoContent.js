import React from "react";

import styles from "./CountryInfoContent.module.css";
import CountryInfoLeftSection from "./Components/CountryInfoLeftSection/CountryInfoLeftSection";
import CountryInfoRightSection from "./Components/CountryInfoRightSection/CountryInfoRightSection";
import BorderCountries from "./Components/BorderCountries/BorderCountries";

const CountryInfoContent = ({
  currentCountry,
  getCurrencies,
  languages,
  borderCountries,
}) => {
  return (
    <div className={styles.country_info}>
      <h3>{currentCountry.name}</h3>
      <div className={styles.country_info_body}>
        <CountryInfoLeftSection currentCountry={currentCountry} />
        <CountryInfoRightSection
          currentCountry={currentCountry}
          getCurrencies={getCurrencies}
          languages={languages}
        />
      </div>
      <BorderCountries borderCountries={borderCountries} />
    </div>
  );
};

export default CountryInfoContent;
