import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TIKET300 — Beranda",
  description: "Platform gaming premium dengan slot, live kasino, olahraga, dan banyak lagi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="stylesheet" href="/assets/app.css" />
      </head>
      <body className="bg-[#1d2125] text-[#b6c2cf] antialiased">
        {children}
        <script src="/assets/app.js" defer></script>
      </body>
    </html>
  );
}