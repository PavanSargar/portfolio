import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
const directory = path.join(process.cwd(), "__posts");
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  content: string;
}
export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(directory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
export function getPostBySlug(slug: string): BlogPost | null {
  if (!/^[a-z0-9-]+$/.test(slug) || !getAllPostSlugs().includes(slug))
    return null;
  const { data, content } = matter(
    fs.readFileSync(path.join(directory, `${slug}.mdx`), "utf8"),
  );
  for (const key of ["title", "date", "excerpt", "author"])
    if (typeof data[key] !== "string")
      throw new Error(`Invalid ${key} in post ${slug}`);
  if (
    !Array.isArray(data.tags) ||
    !data.tags.every((tag) => typeof tag === "string") ||
    Number.isNaN(Date.parse(data.date))
  )
    throw new Error(`Invalid post metadata: ${slug}`);
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    author: data.author,
    tags: data.tags,
    content,
  };
}
export function getAllPosts(): BlogPost[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug)!)
    .sort((a, b) => b.date.localeCompare(a.date));
}
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
