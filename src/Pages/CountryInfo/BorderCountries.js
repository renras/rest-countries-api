import React from "react";

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
              <li key={index}>{borderCountry.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default BorderCountries;
