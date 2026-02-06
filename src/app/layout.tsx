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
  title: "StoryVerse Hub - Everyone deserves to be a hero in their own story",
  description: "Create personalized AI-powered adventure stories where you or your loved ones are the hero. Fantasy, adventure, romance, and more.",
  keywords: ["personalized stories", "custom books", "AI stories", "adventure", "fantasy"],
  openGraph: {
    title: "StoryVerse Hub - Create Your Own Story",
    description: "Everyone deserves to be a hero in their own story",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
