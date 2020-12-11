import styles from "../styles/Layout.module.scss";

export default function Grid({ className, children }) {
  return <div className={[styles.grid, className].join(" ")}>{children}</div>;
}
