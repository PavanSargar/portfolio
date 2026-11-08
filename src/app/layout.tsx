import type { Metadata, Viewport } from "next";
import { display, body } from "@/assets/fonts";
import { profile } from "@/content/portfolio";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: "Pawan Sargar — Full Stack Lead",
    template: "%s | Pawan Sargar",
  },
  description: profile.introduction,
  openGraph: {
    title: "Pawan Sargar — Full Stack Lead",
    description: profile.introduction,
    url: "/",
    siteName: "Pawan Sargar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pawan Sargar — Full Stack Lead",
    description: profile.introduction,
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5DEE8",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <noscript>
          <style>{`.menu-toggle { display: none !important; } #site-nav { display: flex; } .contact-form { display: none; }`}</style>
        </noscript>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
