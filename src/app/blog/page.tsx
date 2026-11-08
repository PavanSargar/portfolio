import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/blog";
const description = "Pawan’s personal notebook: things I’m learning, building, and figuring out along the way.";
export const metadata: Metadata = {
  title: "My notebook",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: "Pawan’s notebook", description, url: "/blog" },
  twitter: { card: "summary_large_image", title: "Pawan’s notebook", description },
};
export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main id="main" className="shell writing-page">
      <header className="notebook-header">
        <p className="section-intro">Pawan’s notebook</p>
        <h1>Notes to myself.<br />And anyone curious.</h1>
        <p>Things I’m learning, building, and figuring out along the way. A small corner for the thoughts I want to keep.</p>
        <span className="notebook-signature">— Pawan</span>
      </header>
      <div className="writing-list">{posts.map((post) => (
        <article key={post.slug}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <div><h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p></div>
        </article>
      ))}</div>
      <p className="notebook-end">An ongoing collection. More pages as I go.</p>
    </main>
  );
}
