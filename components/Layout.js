import Head from "next/head";
import clsx from "clsx";
import styles from "styles/Layout.module.scss";
import Logo from "components/Logo";
import Navigation from "./Navigation";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>TheBuild &#65372; Tom Jankowski</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className={clsx(styles.header, styles.container)}>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
        <Navigation />
      </nav>

      <main>{children}</main>

      <footer className={clsx(styles.footer, styles.container)}>
        <div>
          <span className={styles.footer__logo}>TheBuild</span>
          <span className={styles.footer__sign}>by Tomasz Jankowski</span>
        </div>
        <ul className={styles.footer__links}>
          <li>
            <a
              href="https://www.linkedin.com/in/tom-jankowski/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/tjankowski" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tom.jankowski/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
