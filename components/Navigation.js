import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="navigation">
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
