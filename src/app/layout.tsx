import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

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
  icons: {
    icon: [
      { url: "/favcicon/favicon.ico" },
      { url: "/favcicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favcicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favcicon/apple-touch-icon.png",
  },
  manifest: "/favcicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <Toast />
      </body>
    </html>
  );
}