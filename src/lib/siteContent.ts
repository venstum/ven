import { readFile } from "fs/promises";
import path from "path";
import { XMLParser } from "fast-xml-parser";

export type SiteContent = {
  tagline: string;
  status: string;
  home: {
    intro: string;
    updated: string;
    links: {
      link: Array<{ "#text": string; "@_href": string }>;
    };
  };
  projects: {
    item: Array<string | { "#text": string; "@_href"?: string }>;
  };
  blog: {
    post: Array<{ title: string; summary: string; date: string }>;
  };
  about: {
    bio: string;
    location: string;
    contacts: {
      contact: Array<{ "#text": string; "@_label": string; "@_href": string }>;
    };
  };
};

const parser = new XMLParser({
  ignoreAttributes: false,
  trimValues: true,
});

const toArray = <T>(value: T | T[] | undefined): T[] => {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
};

export async function getSiteContent(): Promise<SiteContent> {
  const xmlPath = path.join(process.cwd(), "src", "content", "site.xml");
  const xml = await readFile(xmlPath, "utf-8");
  const parsed = parser.parse(xml) as { site: SiteContent };
  const site = parsed.site;
  const homeLinks = site.home?.links?.link;
  const projects = site.projects?.item;
  const posts = site.blog?.post;
  const contacts = site.about?.contacts?.contact;

  return {
    ...site,
    home: {
      ...site.home,
      links: {
        link: toArray(homeLinks),
      },
    },
    projects: {
      item: toArray(projects),
    },
    blog: {
      post: toArray(posts),
    },
    about: {
      ...site.about,
      contacts: {
        contact: toArray(contacts),
      },
    },
  };
}
