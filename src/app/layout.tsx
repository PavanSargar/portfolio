import React from "react";
import type { Metadata, Viewport } from "next";
import { montserrat } from "@/assets/fonts";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Pawan Sargar",
  description: "Pawan Sargar Full Stack Developer and Freelancer| Software Engineer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
}
