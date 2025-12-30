"use client";

import { useState } from "react";
import styles from "../site.module.css";

const twitchSrc =
  "https://player.twitch.tv/?channel=venstum&parent=venstum.com&parent=www.venstum.com&parent=localhost&parent=127.0.0.1";
const twitchChatSrc =
  "https://www.twitch.tv/embed/venstum/chat?parent=venstum.com&parent=www.venstum.com&parent=localhost&parent=127.0.0.1";

export default function TwitchClient() {
  const [showChat, setShowChat] = useState(true);

  return (
    <section className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderRow}>
          <span>twitch</span>
          <button
            type="button"
            className={`${styles.toggleButton} ${styles.toggleButtonCompact}`}
            aria-pressed={showChat}
            onClick={() => setShowChat((value) => !value)}
          >
            {showChat ? "hide chat" : "show chat"}
          </button>
        </div>
      </div>
      <div className={styles.cardBody}>
        <div
          className={`${styles.twitchLayout} ${
            showChat ? "" : styles.twitchLayoutSingle
          }`}
        >
          <div className={styles.twitchEmbed}>
            <iframe
              src={twitchSrc}
              allowFullScreen
              scrolling="no"
              title="Twitch stream: venstum"
            />
          </div>
          {showChat ? (
            <div className={styles.twitchChat}>
              <iframe
                src={twitchChatSrc}
                title="Twitch chat: venstum"
                scrolling="no"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
