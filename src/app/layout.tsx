import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alwin Baby | Full Stack Developer",
  description: "Full Stack Developer portfolio showcasing projects and expertise",
  keywords: "Full Stack Developer, React Developer, Node.js, Next.js, Web Development, Portfolio",
  authors: [{ name: "Alwin Baby" }],
  creator: "Alwin Baby",
  publisher: "Alwin Baby",
  applicationName: "Alwin Baby Portfolio",
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favcicon/favicon.ico" },
      { url: "/favcicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favcicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favcicon/apple-touch-icon.png",
  },
  manifest: "/favcicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alwinbaby.com",
    siteName: "Alwin Baby | Full Stack Developer",
    title: "Alwin Baby | Full Stack Developer",
    description: "Full Stack Developer portfolio showcasing React, Node.js, and AWS projects.",
    images: [
      {
        url: "https://alwinbaby.com/profile.png",
        width: 1024,
        height: 1024,
        alt: "Alwin Baby",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@alwin_baby",
    creator: "@alwin_baby",
    title: "Alwin Baby | Full Stack Developer",
    description: "Full Stack Developer portfolio showcasing React, Node.js, and AWS projects.",
    images: ["https://alwinbaby.com/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <Toast />
      </body>
    </html>
  );
}