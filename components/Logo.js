import styles from "../styles/Logo.module.scss";

export default function Logo() {
  return (
    <span className={styles.logo}>
      <span className={styles.text}>TheBuild</span>
      <span className={styles.dots}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </span>
    </span>
  );
}
