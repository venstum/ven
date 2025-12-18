import SiteFrame from "../components/SiteFrame";
import styles from "../site.module.css";
import { getSiteContent } from "@/lib/siteContent";
import { renderMarkdown } from "@/lib/markdown";

export default async function AboutPage() {
  const site = await getSiteContent();

  return (
    <SiteFrame
      tagline={site.tagline}
      location={site.about.location}
      contacts={site.about.contacts.contact}
    >
      <section className={styles.card}>
        <div className={styles.cardHeader}>about</div>
        <div className={styles.cardBody}>
          <div
            className={styles.markdown}
            dangerouslySetInnerHTML={renderMarkdown(site.about.bio)}
          />
          <div className={styles.cardFooter}>
            <span className={styles.meta}>contact</span>
          </div>
          <div className={styles.linksRow}>
            {site.about.contacts.contact.map((contact) => (
              <a key={contact["@_label"]} href={contact["@_href"]}>
                {contact["#text"]}
              </a>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
