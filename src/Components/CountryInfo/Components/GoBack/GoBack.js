import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import styles from "./GoBack.module.css";

const GoBack = () => {
  return (
    <>
      <Link className={styles.link} to="/rest-countries-api">
        <BsArrowLeft className={styles.icon} />
        <p>Back</p>
      </Link>
    </>
  );
};

export default GoBack;
