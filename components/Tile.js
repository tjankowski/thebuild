import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const TileMock = {
  title: "Embrace the change",
  image: "/images/2019.jpg",
  subtitle: "Daily note",
  date: "20.12.2020",
  stats: "6min read",
};

export default function Tile({ tile, className }) {
  const { title, link, image, date, subtitle, stats } = tile;
  return (
    <Link href={link}>
      <a className={clsx("tile", className)}>
        <div className="tile__image">
          <Image
            src="/images/2019.jpg"
            alt={title}
            width={150}
            height={150}
            objectFit={true}
          />
        </div>
        <div className="tile__content">
          <div className="tile__header">
            <div className="tile__title">{title}</div>
            {subtitle && (
              <div className="tile__subtitle">
                {subtitle} from {new Date(date).toLocaleDateString("en-US")}
              </div>
            )}
          </div>
          <div className="tile__footer">
            {stats && <div className="tile__stats">{stats}</div>}
            <span>Read</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
