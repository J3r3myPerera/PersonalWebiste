import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://jeremyperera.com"),
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
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeremy Perera: Associate Software Engineer",
    description:
      "Personal site of Jeremy Perera, Associate Software Engineer at IFS.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#100f0d" },
  ],
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
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
