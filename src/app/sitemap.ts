import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

const ROUTES = [
  { path: "", priority: 1, changeFrequency: "daily" as const },
  { path: "/login", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/download-app", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/games", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/gift-code", priority: 0.7, changeFrequency: "daily" as const },
  { path: "/promotions", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/vip-club", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/referral-program", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/apk-download", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
