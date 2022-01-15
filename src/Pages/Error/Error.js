import React from "react";

import styles from "./Error.module.css";
import GoBack from "../CountryInfo/GoBack";

const Error = () => {
  return (
    <div className={styles.error}>
      <GoBack />
      <h1>Page Not Found</h1>
    </div>
  );
};

export default Error;
