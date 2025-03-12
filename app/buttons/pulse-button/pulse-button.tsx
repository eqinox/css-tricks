import styles from "./pulse-button.module.css";

const PulseButton = () => {
  return (
    <div className={styles["container"]}>
      <span className={styles["pulse-button"]}>pulse</span>
    </div>
  );
};

export default PulseButton;
