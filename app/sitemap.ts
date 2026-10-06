import type { MetadataRoute } from "next";
import { conditions, getAllSubpageParams } from "@/data/conditions";
import { articles } from "@/data/articles";

const baseUrl = "https://lifequality.org.in";

const now = new Date();

const staticPages: MetadataRoute.Sitemap = [
  { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
  { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${baseUrl}/approach`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${baseUrl}/doctors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  { url: `${baseUrl}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${baseUrl}/patient-stories`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  { url: `${baseUrl}/assessment`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${baseUrl}/book-appointment`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  { url: `${baseUrl}/retreat-programs`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  { url: `${baseUrl}/volunteer`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
  { url: `${baseUrl}/archive`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
];

const servicePaths = [
  "/services",
  "/services/physician-consultation",
  "/services/lifestyle",
  "/services/nutrition",
  "/services/therapeutic-yoga",
  "/services/behaviour-stress-mind",
];

const conditionPages: MetadataRoute.Sitemap = conditions.map((condition) => ({
  url: `${baseUrl}/conditions/${condition.slug}`,
  lastModified: now,
  changeFrequency: "monthly",
  priority: 0.8,
}));

const conditionSubpages: MetadataRoute.Sitemap = getAllSubpageParams().map(({ slug, subslug }) => ({
  url: `${baseUrl}/conditions/${slug}/${subslug}`,
  lastModified: now,
  changeFrequency: "monthly",
  priority: 0.7,
}));

const servicePages: MetadataRoute.Sitemap = servicePaths.map((path) => ({
  url: `${baseUrl}${path}`,
  lastModified: now,
  changeFrequency: "monthly",
  priority: path === "/services" ? 0.9 : 0.8,
}));

const resourcePages: MetadataRoute.Sitemap = [
  { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  { url: `${baseUrl}/resources/articles`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  { url: `${baseUrl}/resources/health-guides`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${baseUrl}/resources/research`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${baseUrl}/resources/health-guides/positive-thinking`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  { url: `${baseUrl}/resources/health-guides/soft-sun-rays`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  { url: `${baseUrl}/resources/health-guides/nature-walks`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
];

const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
  url: `${baseUrl}/resources/articles/${article.slug}`,
  lastModified: new Date(article.updatedDate ?? article.date),
  changeFrequency: "monthly",
  priority: 0.7,
}));

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages,
    ...servicePages,
    { url: `${baseUrl}/conditions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...conditionPages,
    ...conditionSubpages,
    ...resourcePages,
    ...articlePages,
  ];
}
