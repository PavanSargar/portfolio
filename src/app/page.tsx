import React from "react";
import Hero from "@/components/Home/Hero";
import Experience from "@/components/Home/Experience";
import Projects from "@/components/Home/Projects";
import Testimonials from "@/components/Home/Testimonials";
import Contact from "@/components/Home/Contact";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Hero />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
