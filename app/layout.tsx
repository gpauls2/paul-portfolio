import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Fangot | Web Developer, IT Specialist & Social Media Manager",
  description:
    "Portfolio of Paul Fangot, a multidisciplinary digital professional working across web development, IT support, systems, LMS administration, and social media.",
  keywords: [
    "Paul Fangot",
    "Web Developer",
    "IT Support",
    "IT Specialist",
    "LMS Administrator",
    "WordPress Developer",
    "Next.js Developer",
    "React Developer",
    "Social Media Manager",
    "Baguio City",
    "Philippines",
  ],
  authors: [
    {
      name: "Paul Fangot",
    },
  ],
  creator: "Paul Fangot",
  openGraph: {
    title: "Paul Fangot | Web Developer, IT Specialist & Social Media Manager",
    description:
      "Explore my work across web development, IT systems, LMS administration, and creative digital projects.",
    type: "website",
    locale: "en_US",
    siteName: "Paul Fangot Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Fangot | Digital Portfolio",
    description:
      "Web development, IT systems, LMS administration, and creative digital work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}