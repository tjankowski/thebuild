import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

class Page {
  constructor(label, link) {
    this.label = label;
    this.link = link;
  }
}

const pages = [
  new Page("Notes", "/notes"),
  new Page("Lab", "/lab"),
  new Page("About", "/about"),
];

export default function Navigation() {
  const router = useRouter();
  return (
    <ul className="navigation">
      {pages.map((page) => (
        <li key={page.link}>
          <Link href={page.link}>
            <a
              className={clsx("highlight", {
                highlight_hover: page.link !== router.pathname,
              })}
            >
              {page.label}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
