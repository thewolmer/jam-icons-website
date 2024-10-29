import type { SiteConfig } from "@/types";
/**
 * Site configuration for SEO, Make sure to setup current values before deploying the site.
 * @type {SiteConfig}
 * @returns {SiteConfig} - Site configuration object.
 */
export const siteConfig: SiteConfig = {
  name: "Jam Icons React",
  description: "Jam icons for react. npm install @wolmer/jam-icons",
  url: "https://jamicons.wolmer.me", // Used in og:url for SEO
  domain: "jamicons.wolmer.me", // Used in utm_source for external links
  ogImage: {
    // Used in og:image for SEO
    url: "https://jamicons.wolmer.me/images/banner.png",
    width: 641,
    height: 320,
  },
  twitterHandle: "@thewolmer", // Used in twitter:site for SEO
  links: {
    twitter: "https://twitter.com/thewolmer", // Used in footer for social links
  },
};
