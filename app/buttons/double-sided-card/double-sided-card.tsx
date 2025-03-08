import styles from "./double-sided-card.module.css";

const DoubleSidedCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles["card-inner"]}>
        <div className={styles["card-front"]}>Front Side</div>
        <div className={styles["card-back"]}>Back Side</div>
      </div>
    </div>
  );
};

export default DoubleSidedCard;
