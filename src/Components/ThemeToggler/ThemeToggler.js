import styles from "./ThemeToggler.module.css";

const ThemeToggler = ({ icon, text, themeToggler }) => {
  return (
    <div className={styles.themeToggler} onClick={themeToggler}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default ThemeToggler;
