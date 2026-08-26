import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { profile, roleLine } from "@/data/profile";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} | ${roleLine}`,
  description: profile.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-bone font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
