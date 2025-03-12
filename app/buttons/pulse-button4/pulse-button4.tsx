import styles from "./pulse-button4.module.css"; // Make sure you have a CSS module

export default function AnimatedButton() {
  return (
    <button className={styles.button}>
      <div className={styles.inner}></div>
      button
    </button>
  );
}
