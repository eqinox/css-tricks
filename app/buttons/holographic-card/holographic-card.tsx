import styles from "./holographic-card.module.css";

const HolographicCard = () => {
  return (
    <div className={styles["holographic-container"]}>
      <div className={styles["holographic-card"]}>
        <h2>HOLOGRAM</h2>
      </div>
    </div>
  );
};

export default HolographicCard;
