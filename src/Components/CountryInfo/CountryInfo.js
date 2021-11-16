import React from "react";

import styles from "./CountryInfo.module.css";
import useFetch from "./CountryInfoLogic";
import CountryInfoContent from "./Components/CountryInfoContent";
import GoBack from "./Components/GoBack/GoBack";

const CountryInfo = () => {
  const { currentCountry, getCurrencies, languages, borderCountries } =
    useFetch();

  return (
    <section className={styles.country_section}>
      <GoBack />
      <div className={styles.country_section_content}>
        <img src={currentCountry.flags.png} alt="countryFlag" />
        <CountryInfoContent
          getCurrencies={getCurrencies}
          languages={languages}
          borderCountries={borderCountries}
          currentCountry={currentCountry}
        />
      </div>
    </section>
  );
};

export default CountryInfo;
