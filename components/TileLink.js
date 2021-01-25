import Link from "next/link";

export default function TileLink({ href, children }) {
  return (
    <Link href="/lab" className="">
      <a className="tile center">
        <span className="highlight">{children}</span>
      </a>
    </Link>
  );
}
