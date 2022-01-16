import styles from "./ThemeToggler.module.css";

const ThemeToggler = ({ icon, text, themeToggler }) => {
  return (
    <button className={styles.darkMode} onClick={themeToggler}>
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default ThemeToggler;
