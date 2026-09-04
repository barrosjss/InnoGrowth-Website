import type { MetadataRoute } from "next";

const BASE_URL = "https://www.innogrowth.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/dashboard",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
