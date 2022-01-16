import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = ({ text, onChange, placeHolder }) => {
  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.searchIcon} />
      <input
        type="text"
        placeholder={placeHolder}
        value={text}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default SearchBar;
