import Link from "next/link";
import styles from "../site.module.css";

const asciiTitle = String.raw`
 _    _________   _______________  ____  ___
| |  / / ____/ | / / ___/_  __/ / / /  |/  /
| | / / __/ /  |/ /\__ \ / / / / / / /|_/ / 
| |/ / /___/ /|  /___/ // / / /_/ / /  / /  
|___/_____/_/ |_//____//_/  \____/_/  /_/   
`;

type Contact = {
  "#text": string;
  "@_label": string;
  "@_href": string;
};

type SiteFrameProps = {
  tagline: string;
  location: string;
  contacts: Contact[];
  children: React.ReactNode;
};

export default function SiteFrame({
  tagline,
  location,
  contacts,
  children,
}: SiteFrameProps) {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true">
        <video className={styles.bgVideo} autoPlay muted loop playsInline>
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className={styles.bgOverlay} />
      </div>
      <header className={styles.hero}>
        <div className={styles.heroTop}>
          <div>
            <pre className={styles.ascii}>{asciiTitle}</pre>
            <p className={styles.tagline}>{tagline}</p>
          </div>
        </div>
        <nav className={styles.nav}>
          <Link href="/">home</Link>
          <Link href="/projects">projects</Link>
          <Link href="/pictures">pictures</Link>
          <Link href="/blog">blog</Link>
          <Link href="/about">about</Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div>
          <h2>ven</h2>
          <p>{location}</p>
        </div>
        <div className={styles.footerLinks}>
          {contacts.map((contact) => (
            <a
              key={contact["@_label"]}
              href={contact["@_href"]}
              target={contact["@_href"].startsWith("http") ? "_blank" : undefined}
              rel={contact["@_href"].startsWith("http") ? "noreferrer" : undefined}
            >
              {contact["#text"]}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
