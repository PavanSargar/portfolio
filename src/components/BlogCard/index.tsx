"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { poppins } from "@/assets/fonts";
import { BlogPost } from "@/lib/blog";
import styles from "./index.module.css";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
        <div className={styles.cardContent}>
          <div className={styles.dateContainer}>
            <span className={`${poppins.className} ${styles.date} color-primary`}>
              {formattedDate}
            </span>
          </div>
          
          <h3 className={`${poppins.className} ${styles.title} color-light`}>
            {post.title}
          </h3>
          
          <p className={`${poppins.className} ${styles.excerpt} color-dim`}>
            {post.excerpt}
          </p>
          
          <div className={styles.tagsContainer}>
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`${styles.tag} color-primary`}
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className={styles.readMore}>
            <span className={`${poppins.className} color-primary`}>
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
