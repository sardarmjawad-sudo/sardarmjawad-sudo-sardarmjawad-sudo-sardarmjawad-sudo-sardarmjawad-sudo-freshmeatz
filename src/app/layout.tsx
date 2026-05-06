import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Halal Meat Market | Fresh Zabiha Halal",
  description: "Your trusted local butcher shop for premium fresh zabiha halal meat, organic chicken, baby goat, lamb, beef, and seafood.",
  keywords: "halal butcher shop, fresh meat, Zabiha halal, goat, lamb, chicken, beef, seafood, local meat market, organic chicken",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-black">{children}</body>
    </html>
  );
}
