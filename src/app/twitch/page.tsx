import SiteFrame from "../components/SiteFrame";
import { getSiteContent } from "@/lib/siteContent";
import TwitchClient from "./TwitchClient";

export default async function TwitchPage() {
  const site = await getSiteContent();

  return (
    <SiteFrame
      tagline={site.tagline}
      location={site.about.location}
      contacts={site.about.contacts.contact}
    >
      <TwitchClient />
    </SiteFrame>
  );
}
