"use client";
import React from "react";
import { motion } from "framer-motion";
import { poppins } from "@/assets/fonts";
import { BlogPost } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import styles from "./index.module.css";

interface BlogPageClientProps {
  posts: BlogPost[];
}

const BlogPageClient = ({ posts }: BlogPageClientProps) => {
  return (
    <main className={`${styles.main} section-margin`}>
      <div className={styles.header}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${poppins.className} h-1 color-light mb-3`}
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${poppins.className} color-dim mb-5`}
        >
          Thoughts on web development, technology, and the future of digital experiences.
        </motion.p>
        <div className={`bg-color-primary w-100 ${styles.hr} mb-5`}></div>
      </div>

      <div className={styles.postsGrid}>
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default BlogPageClient;
