import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shri Akshaya Granites | Premium Granite & Marble Solutions",
  description:
    "Shri Akshaya Granites - Your trusted partner for premium granite and marble products, custom fabrication, and professional installation in Tamil Nadu.",
  keywords: [
    "granite",
    "marble",
    "fabrication",
    "installation",
    "Tamil Nadu",
    "stone supplier",
    "countertops",
    "flooring",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
