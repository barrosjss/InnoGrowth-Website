import type { MetadataRoute } from "next";

const BASE_URL = "https://www.innogrowth.co";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Googlebot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: AI_CRAWLERS,
        allow: "/",
        disallow: "/dashboard",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/dashboard",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
