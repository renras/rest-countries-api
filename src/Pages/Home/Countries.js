import React from "react";

import styles from "./Country.module.css";
import { Link } from "react-router-dom";
import useCountries from "./CountriesLogic";
import Card from "../../Components/Card/Card";

const Country = () => {
  const { filteredCountries } = useCountries();

  return (
    <>
      {filteredCountries.map((country, index) => {
        return (
          <Link
            className={styles.link}
            to={`/country-info/${country.name}`}
            key={index}
          >
            <Card country={country} />
          </Link>
        );
      })}
    </>
  );
};
export default Country;
