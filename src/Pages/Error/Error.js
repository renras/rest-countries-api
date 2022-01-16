import React from "react";

import styles from "./Error.module.css";
import GoBackButton from "../../Components/GoBackButton/GoBackButton";

const Error = () => {
  return (
    <div className={styles.error}>
      <GoBackButton text="Back" to="/" />
      <h1>Page Not Found</h1>
    </div>
  );
};

export default Error;
