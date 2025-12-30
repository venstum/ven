import SiteFrame from "../components/SiteFrame";
import styles from "../site.module.css";
import { getSiteContent } from "@/lib/siteContent";

const twitchSrc =
  "https://player.twitch.tv/?channel=venstum&parent=venstum.com&parent=www.venstum.com&parent=localhost&parent=127.0.0.1";
const twitchChatSrc =
  "https://www.twitch.tv/embed/venstum/chat?parent=venstum.com&parent=www.venstum.com&parent=localhost&parent=127.0.0.1";

export default async function TwitchPage() {
  const site = await getSiteContent();

  return (
    <SiteFrame
      tagline={site.tagline}
      location={site.about.location}
      contacts={site.about.contacts.contact}
    >
      <section className={styles.card}>
        <div className={styles.cardHeader}>twitch</div>
        <div className={styles.cardBody}>
          <div className={styles.twitchLayout}>
            <div className={styles.twitchEmbed}>
              <iframe
                src={twitchSrc}
                allowFullScreen
                scrolling="no"
                title="Twitch stream: venstum"
              />
            </div>
            <div className={styles.twitchChat}>
              <iframe
                src={twitchChatSrc}
                title="Twitch chat: venstum"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
