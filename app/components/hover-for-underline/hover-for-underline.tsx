import styles from "./hover-for-underline.module.css";

const HoverForUnderline = () => {
  return (
    <div className={styles.container}>
      <div className={styles["hover-underline"]}>Hover for underline</div>
    </div>
  );
};

export default HoverForUnderline;
