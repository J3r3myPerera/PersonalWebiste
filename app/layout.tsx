import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Jeremy Perera — Associate Software Developer",
  description:
    "Personal site of Jeremy Perera — Associate Software Developer at IFS. Building thoughtful software, exploring data, and shipping ideas.",
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
    title: "Jeremy Perera — Associate Software Developer",
    description:
      "Personal site of Jeremy Perera — Associate Software Developer at IFS.",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
