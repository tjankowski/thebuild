import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "styles/Tile.module.scss";

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
      <a className={clsx(styles.tile, className)}>
        <div className={styles.image}>
          <Image
            src="/images/2019.jpg"
            alt={title}
            width={150}
            height={150}
            objectFit={true}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            {subtitle && (
              <div className={styles.subtitle}>
                {subtitle} from {new Date(date).toLocaleDateString()}
              </div>
            )}
          </div>
          <div className={styles.footer}>
            {stats && <div className={styles.stats}>{stats}</div>}
            <span>Read</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
