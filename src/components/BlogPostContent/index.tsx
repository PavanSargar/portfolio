"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { poppins } from "@/assets/fonts";
import { BlogPost } from "@/lib/blog";
import styles from "./index.module.css";
import "highlight.js/styles/vs2015.css";

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className={`${styles.main} section-margin`}>
      <div className={styles.container}>
        {/* Back to Blog */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.backLink}
        >
          <Link href="/blog" className={`${poppins.className} color-primary`}>
            ← Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.header}
        >
          <div className={styles.meta}>
            <span className={`${poppins.className} ${styles.date} color-primary`}>
              {formattedDate}
            </span>
            <span className={`${poppins.className} ${styles.author} color-dim`}>
              by {post.author}
            </span>
          </div>
          
          <h1 className={`${poppins.className} ${styles.title} color-light`}>
            {post.title}
          </h1>
          
          <p className={`${poppins.className} ${styles.excerpt} color-dim`}>
            {post.excerpt}
          </p>
          
          <div className={styles.tagsContainer}>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`${styles.tag} color-primary`}
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className={`bg-color-primary w-100 ${styles.hr}`}></div>
        </motion.header>

        {/* Article Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${styles.content} ${poppins.className} blog-content`}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className={`${styles.h1} color-light`}>{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className={`${styles.h2} color-light`}>{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className={`${styles.h3} color-primary`}>{children}</h3>
              ),
              p: ({ children }) => (
                <p className={`${styles.paragraph} color-light`}>{children}</p>
              ),
              code: ({ children, className }) => (
                <code className={`${styles.inlineCode} ${className || ''}`}>
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className={styles.codeBlock}>{children}</pre>
              ),
              ul: ({ children }) => (
                <ul className={`${styles.list} color-light`}>{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className={`${styles.list} color-light`}>{children}</ol>
              ),
              li: ({ children }) => (
                <li className={styles.listItem}>{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className={styles.blockquote}>{children}</blockquote>
              ),
              a: ({ href, children }) => (
                <a href={href} className={`${styles.link} color-primary`} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </motion.article>

        {/* Back to Blog Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={styles.footer}
        >
          <Link href="/blog" className={`${poppins.className} ${styles.backButton}`}>
            ← Back to All Posts
          </Link>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPostContent;
