import Link from "next/link";
import styles from "./not-found.module.css";

const asciiTitle = String.raw`
███████╗██╗   ██╗███████╗████████╗███████╗███╗   ███╗    ███████╗ █████╗ ██╗██╗     ██╗   ██╗██████╗ ███████╗
██╔════╝╚██╗ ██╔╝██╔════╝╚══██╔══╝██╔════╝████╗ ████║    ██╔════╝██╔══██╗██║██║     ██║   ██║██╔══██╗██╔════╝
███████╗ ╚████╔╝ ███████╗   ██║   █████╗  ██╔████╔██║    █████╗  ███████║██║██║     ██║   ██║██████╔╝█████╗  
╚════██║  ╚██╔╝  ╚════██║   ██║   ██╔══╝  ██║╚██╔╝██║    ██╔══╝  ██╔══██║██║██║     ██║   ██║██╔══██╗██╔══╝  
███████║   ██║   ███████║   ██║   ███████╗██║ ╚═╝ ██║    ██║     ██║  ██║██║███████╗╚██████╔╝██║  ██║███████╗
╚══════╝   ╚═╝   ╚══════╝   ╚═╝   ╚══════╝╚═╝     ╚═╝    ╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
`;

export default function NotFound() {
  return (
    <main className={styles.page}>
      <pre className={styles.title}>{asciiTitle}</pre>
      <p className={styles.text}>This page appears to be missing.</p>
      <p className={styles.text}>
        It might have been <em>relocated, deleted</em>, or{" "}
        <em>never existed</em> in the first place.
      </p>
      <Link className={styles.link} href="/">
        homepage
      </Link>
      <footer className={styles.footer}>error 404 - page not found</footer>
    </main>
  );
}
