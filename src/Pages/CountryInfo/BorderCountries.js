import React from "react";
import { Link } from "react-router-dom";

import styles from "./BorderCountries.module.css";

const BorderCountries = ({ borderCountries }) => {
  return (
    <>
      {borderCountries.length > 0 && (
        <div className={styles.country_info_footer}>
          <p>
            <b>Border Countries</b>:
          </p>
          <ul>
            {borderCountries.map((borderCountry, index) => (
              <li>
                <Link key={index} to={`/country-info/${borderCountry.name}`}>
                  {borderCountry.name}
                </Link>
              </li>
              // <li key={index}>{borderCountry.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BorderCountries;
