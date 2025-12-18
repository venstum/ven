import SiteFrame from "./components/SiteFrame";
import styles from "./site.module.css";
import { getSiteContent } from "@/lib/siteContent";
import { renderMarkdown } from "@/lib/markdown";

export default async function Home() {
  const site = await getSiteContent();

  return (
    <SiteFrame
      tagline={site.tagline}
      location={site.about.location}
      contacts={site.about.contacts.contact}
    >
      <div className={styles.columns}>
        <section id="notes" className={styles.card}>
          <div className={styles.cardHeader}>latest notes</div>
          <div className={styles.cardBody}>
            {site.blog.post.slice(0, 2).map((post, index) => (
              <article key={`${post.title}-${index}`} className={styles.note}>
                <h3>{post.title}</h3>
                <div
                  className={styles.markdown}
                  dangerouslySetInnerHTML={renderMarkdown(post.summary)}
                />
                <span className={styles.meta}>{post.date}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className={styles.card}>
          <div className={styles.cardHeader}>current focus</div>
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
      </div>
    </SiteFrame>
  );
}
