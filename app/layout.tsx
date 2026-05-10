import type { Metadata } from "next";
import "./globals.css";
import Motion from "./motion";

export const metadata: Metadata = {
  title: "Dveloped",
  description:
    "Dveloped is a product engineering studio that builds and operates high-quality web, mobile, and SaaS products.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Motion />
        {children}
      </body>
    </html>
  );
}
