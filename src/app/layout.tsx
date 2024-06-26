import type { Metadata } from "next";
import "./globals.css";
import meta from "@/data/meta.json";

const NEXT_PUBLIC_URL = "http://localhost:3000/";

const { title, description, manifest, openGraph, icons } = meta;

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title,
  description,
  icons,
  manifest,
  alternates: {
    canonical: NEXT_PUBLIC_URL,
  },
  openGraph: {
    ...openGraph,
    url: NEXT_PUBLIC_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <main className="overflow-hidden flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
