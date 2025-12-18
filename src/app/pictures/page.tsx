import Image from "next/image";
import SiteFrame from "../components/SiteFrame";
import styles from "../site.module.css";
import { getSiteContent } from "@/lib/siteContent";

export default async function PicturesPage() {
  const site = await getSiteContent();

  return (
    <SiteFrame
      tagline={site.tagline}
      location={site.about.location}
      contacts={site.about.contacts.contact}
    >
      <section className={styles.card}>
        <div className={styles.cardHeader}>pictures</div>
        <div className={styles.cardBody}>
          <div className={styles.pictureGrid}>
            {[
              "/images/5.png",
              "/images/3.png",
              "/images/2.png",
              "/images/1.png",
              "/images/0.png",
            ].map((src, index) => (
              <div key={src} className={styles.pictureTile}>
                <Image
                  src={src}
                  alt={`picture ${index + 1}`}
                  width={720}
                  height={520}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
