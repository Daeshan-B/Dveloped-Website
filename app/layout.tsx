import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dveloped",
  description:
    "Dveloped is a product engineering studio that builds and operates high-quality web, mobile, and SaaS products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

