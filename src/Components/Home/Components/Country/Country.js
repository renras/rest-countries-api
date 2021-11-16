import React from "react";

import styles from "./Country.module.css";
import { Link } from "react-router-dom";
import useFetch from "./CountryLogic";

import SingleCountry from "./Components/SingleCountry";

const Country = () => {
  const { filteredCountries } = useFetch();

  return (
    <>
      {filteredCountries.map((country, index) => {
        return (
          <Link
            className={styles.link}
            to={`/rest-counries-api/country-info/${country.name}`}
            key={index}
          >
            <SingleCountry country={country} />
          </Link>
        );
      })}
    </>
  );
};
export default Country;
