import type { MetadataRoute } from "next";
import { profile } from "@/content/portfolio";
import { getAllPosts } from "@/lib/blog";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/blog",
    "/work/cassandra-risk",
    ...getAllPosts().map((post) => `/blog/${post.slug}`),
  ].map((route) => ({
    url: `${profile.siteUrl}${route}`,
    changeFrequency: route.includes("/blog/") ? "yearly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
