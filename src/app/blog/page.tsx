import React from "react";
import { getAllPosts } from "@/lib/blog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogPageClient from "@/components/BlogPageClient/index";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <BlogPageClient posts={posts} />
      <Footer />
    </>
  );
}
