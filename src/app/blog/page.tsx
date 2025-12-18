import SiteFrame from "../components/SiteFrame";
import styles from "../site.module.css";
import { getSiteContent } from "@/lib/siteContent";
import { renderMarkdown } from "@/lib/markdown";

export default async function BlogPage() {
  const site = await getSiteContent();

  return (
    <SiteFrame
      tagline={site.tagline}
      location={site.about.location}
      contacts={site.about.contacts.contact}
    >
      <section className={styles.card}>
        <div className={styles.cardHeader}>blog</div>
        <div className={styles.cardBody}>
          {site.blog.post.map((post, index) => (
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
    </SiteFrame>
  );
}
