import React from "react";
import Head from "next/head";
import { montserrat } from "@/assets/fonts";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Testimonials from "@/components/Home/Testimonials";
import Contact from "@/components/Home/Contact";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pawan Sargar</title>
        <meta
          name="description"
          content="Pawan Sargar Full Stack Developer and Freelancer| Software Engineer Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${montserrat.className}`}>
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
