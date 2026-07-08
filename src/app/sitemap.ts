import type { MetadataRoute } from "next";
import { trades } from "@/data/trades";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;
  const staticPages = ["", "/services", "/samples", "/pricing", "/about", "/blog", "/faqs", "/contact"].map(
    (p) => ({ url: `${base}${p}`, changeFrequency: "weekly" as const })
  );
  const tradePages = trades.map((t) => ({
    url: `${base}/services/${t.slug}`,
    changeFrequency: "monthly" as const,
  }));
  const blogPages = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    changeFrequency: "monthly" as const,
  }));
  return [...staticPages, ...tradePages, ...blogPages];
}
