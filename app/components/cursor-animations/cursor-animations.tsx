import styles from "./cursor-animations.module.css";

const CursorAnimations = () => {
  return (
    <div className={styles["container"]}>
      <div className={`${styles["cursor-box"]} ${styles.pointer}`}>pointer</div>
      <div className={`${styles["cursor-box"]} ${styles.help}`}>help</div>
      <div className={`${styles["cursor-box"]} ${styles.wait}`}>wait</div>
      <div className={`${styles["cursor-box"]} ${styles.crosshair}`}>
        crosshair
      </div>
      <div className={`${styles["cursor-box"]} ${styles.text}`}>text</div>
      <div className={`${styles["cursor-box"]} ${styles["not-allowed"]}`}>
        not-allowed
      </div>
      <div className={`${styles["cursor-box"]} ${styles.grab}`}>grab</div>
      <div className={`${styles["cursor-box"]} ${styles["zoom-in"]}`}>
        zoom-in
      </div>
      <div className={`${styles["cursor-box"]} ${styles.cell}`}>cell</div>
      <div className={`${styles["cursor-box"]} ${styles.copy}`}>copy</div>
      <div className={`${styles["cursor-box"]} ${styles.move}`}>move</div>
      <div className={`${styles["cursor-box"]} ${styles.alias}`}>alias</div>
    </div>
  );
};

export default CursorAnimations;
