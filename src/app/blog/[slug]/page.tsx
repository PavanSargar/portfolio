import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { getAllPostSlugs, getPostBySlug, formatDate } from "@/lib/blog";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      url: `/blog/${slug}`,
    },
  };
}
export default async function BlogPost({ params }: Props) {
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();
  const content = post.content.trimStart().replace(/^# .+\r?\n+/, "");
  const readingMinutes = Math.max(1, Math.ceil(content.split(/\s+/).length / 220));
  return (
    <main id="main" className="article-page shell">
      <Link className="text-link" href="/blog">
        Back to my notebook
      </Link>
      <article>
        <header>
          <h1>{post.title}</h1>
          <div className="article-meta">
            <span>By {post.author}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{readingMinutes} min read</span>
          </div>
          <p className="article-excerpt">{post.excerpt}</p>
        </header>
        <div className="prose">
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight]}
            components={{ h1: ({ children }) => <h2>{children}</h2> }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>
      <footer className="article-signoff">
        <p>Thanks for spending a little time in my corner of the internet.</p>
        <Link href="/blog" className="text-link">More from my notebook</Link>
      </footer>
    </main>
  );
}
