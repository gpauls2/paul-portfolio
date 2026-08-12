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
  metadataBase: new URL("https://gpaulsportfolio.online"),

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
      url: "https://gpaulsportfolio.online",
    },
  ],

  creator: "Paul Fangot",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Paul Fangot | Web Developer, IT Specialist & Social Media Manager",
    description:
      "Explore my work across web development, IT systems, LMS administration and creative digital projects.",
    url: "/",
    siteName: "Paul Fangot Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paul Fangot Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Paul Fangot | Digital Portfolio",
    description:
      "Web development, IT systems, LMS administration and creative digital work.",
    images: ["/og-image.png"],
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