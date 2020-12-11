import Link from "next/link";
import styles from "styles/Layout.module.scss";

export default function Navigation() {
  return (
    <ul className={styles.navigation}>
      <li>
        <Link href="/notes">
          <a>Notes</a>
        </Link>
      </li>
      <li>
        <Link href="/lab">
          <a>Lab</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
  );
}
