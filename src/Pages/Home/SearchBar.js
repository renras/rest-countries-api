import React from "react";

import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import useFetch from "./SearchBarLogic";

const SearchBar = () => {
  const { text, handleChange } = useFetch();

  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder="Search for a country..."
        value={text}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default SearchBar;
