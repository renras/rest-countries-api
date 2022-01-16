import styles from "./ToggleDarkMode.module.css";

const ToggleDarkMode = ({ icon, text, themeToggler }) => {
  return (
    <button className={styles.darkMode} onClick={themeToggler}>
      {icon}
      <p>{text}</p>
    </button>
  );
};

export default ToggleDarkMode;
