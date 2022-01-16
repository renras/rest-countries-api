import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import styles from "./GoBackButton.module.css";

const GoBackButton = ({ path, text }) => {
  return (
    <>
      <Link className={styles.link} to={path}>
        <BsArrowLeft className={styles.icon} />
        <p>{text}</p>
      </Link>
    </>
  );
};

export default GoBackButton;
