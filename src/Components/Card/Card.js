import React from "react";

import styles from "./Card.module.css";

const SingleCountry = ({ country }) => {
  return (
    <div className={styles.card}>
      <img src={country.flags.png} alt="" />
      <div className={styles.info}>
        <h2>{country.name}</h2>
        <ul>
          <li>
            <b>Population</b>: {country.population}
          </li>
          <li>
            <b>Region</b>: {country.region}
          </li>
          <li>
            <b>Capital</b>: {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleCountry;
