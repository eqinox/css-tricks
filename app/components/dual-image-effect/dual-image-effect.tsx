import styles from "./dual-image-effect.module.css";

const DualImageEffect = () => {
  return (
    <div className={styles["gallery"]}>
      <img src="https://picsum.photos/id/582/400/400" alt="a wolf" />
      <img src="https://picsum.photos/id/1074/400/400" alt="a lioness" />
    </div>
  );
};

export default DualImageEffect;
