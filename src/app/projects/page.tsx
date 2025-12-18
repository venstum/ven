import SiteFrame from "../components/SiteFrame";
import styles from "../site.module.css";
import { getSiteContent } from "@/lib/siteContent";

export default async function ProjectsPage() {
  const site = await getSiteContent();

  return (
    <SiteFrame
      tagline={site.tagline}
      location={site.about.location}
      contacts={site.about.contacts.contact}
    >
      <section className={styles.card}>
        <div className={styles.cardHeader}>projects</div>
        <div className={styles.cardBody}>
          <ul className={styles.list}>
            {site.projects.item.map((item, index) => {
              const label = typeof item === "string" ? item : item["#text"];
              const href = typeof item === "string" ? undefined : item["@_href"];
              return (
                <li key={`${label}-${index}`}>
                  {href ? (
                    <a href={href} target="_blank" rel="noreferrer">
                      {label}
                    </a>
                  ) : (
                    label
                  )}
                </li>
              );
            })}
          </ul>
          <div className={styles.cardFooter} />
        </div>
      </section>
    </SiteFrame>
  );
}
