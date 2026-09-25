import { profile } from "../data/portfolio.js";
import { SITE_DESCRIPTION } from "../seo/person.js";

export const pwaOptions = {
  favicon: "/assets/icon/favicon-v4.png",
  themeColor: "#17352f",
  cacheHTML: false,
  appendBase: true,
  apple: { icon: "/assets/icon/apple-touch-icon-180-v4.png", statusBarColor: "black" },
  generateSWConfig: {
    globPatterns: [
      "index.html",
      "404.html",
      "manifest.webmanifest",
      "assets/app-*.js",
      "assets/framework-*.js",
      "assets/style-*.css",
      "assets/icon/*.png",
    ],
    runtimeCaching: [
      {
        urlPattern: /\/assets\/.*\.(?:js|css)$/u,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "dl-assets",
          expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 30 },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|webp|svg|woff2?)$/u,
        handler: "CacheFirst",
        options: {
          cacheName: "dl-media",
          expiration: { maxEntries: 120, maxAgeSeconds: 60 * 60 * 24 * 30 },
        },
      },
      {
        urlPattern: ({ request }: { request: Request }) => request.mode === "navigate",
        handler: "NetworkFirst",
        options: { cacheName: "dl-pages", networkTimeoutSeconds: 4, expiration: { maxEntries: 60 } },
      },
    ],
  },
  manifest: {
    name: `${profile.name} — ${profile.headline.replace(/[,.]$/u, "")}`,
    short_name: profile.name,
    description: SITE_DESCRIPTION,
    theme_color: "#17352f",
    background_color: "#f5f4f0",
    icons: [
      { src: "/assets/icon/maskable-512-v4.png", sizes: "512x512", purpose: "maskable", type: "image/png" },
      { src: "/assets/icon/maskable-192-v4.png", sizes: "192x192", purpose: "maskable", type: "image/png" },
      { src: "/logo-ai-v4.png", sizes: "512x512", purpose: "any", type: "image/png" },
      { src: "/assets/icon/icon-192-v4.png", sizes: "192x192", purpose: "any", type: "image/png" },
    ],
    shortcuts: [
      { name: "Research", short_name: "Research", description: "Explore David Liu's research program and publications.", url: "/#research" },
      { name: "Algorithms", short_name: "Algorithms", description: "Open the algorithm knowledge map.", url: "/algo/" },
      { name: "AI Systems", short_name: "AI", description: "Open the AI systems knowledge map.", url: "/ai/" },
      { name: "CS Foundations", short_name: "CS", description: "Open the computer science knowledge map.", url: "/cs/" },
      { name: "Software Engineering", short_name: "Engineering", description: "Open the software engineering knowledge map.", url: "/se/" },
      { name: "Test Preparation", short_name: "Test Prep", description: "Open the TOEFL and GRE study system.", url: "/test/" },
    ],
  },
};
