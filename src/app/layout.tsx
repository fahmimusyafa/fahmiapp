import type { Metadata } from "next";
import "./globals.css";
import AosProvider from "@/components/AosProvider";

export const metadata: Metadata = {
  title: "Fahmi - Fullstack Developer",
  description:
    "Full-stack web developer specializing in Laravel, Vue.js, and TypeScript. Building scalable applications with technical precision.",
  metadataBase: new URL("https://fahmi.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        `}</style>
      </head>
      <body>
        <AosProvider />
        {children}
      </body>
    </html>
  );
}
