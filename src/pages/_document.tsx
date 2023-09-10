import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
