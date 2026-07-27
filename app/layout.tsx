import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-newsreader",
  // Next 14 has no fallback metrics for Newsreader; opt out of the override.
  adjustFontFallback: false,
  fallback: ["Georgia", "serif"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Jeremy Perera: Associate Software Engineer",
  description:
    "Personal site of Jeremy Perera, Associate Software Engineer at IFS. Building thoughtful software, exploring data, and shipping ideas.",
  keywords: [
    "Jeremy Perera",
    "Dinuka Perera",
    "Software Developer",
    "IFS",
    "Portfolio",
    "Sri Lanka",
  ],
  authors: [{ name: "Jeremy Perera" }],
  openGraph: {
    title: "Jeremy Perera: Associate Software Engineer",
    description:
      "Personal site of Jeremy Perera, Associate Software Engineer at IFS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
