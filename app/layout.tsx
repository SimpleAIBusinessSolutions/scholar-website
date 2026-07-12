import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Scholar Digital Solutions | Websites Built to Perform",
  description:
    "Unique, professionally designed websites with a built-in dashboard to edit your content, track your traffic, and grow your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-bg text-text antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* First-party analytics — replace the src origin with your
            actual dashboard domain once known (currently the .vercel.app
            URL, or dashboard.scholardigitalsolutions.ie once live) */}
        <Script
          src="https://dashboard.scholardigitalsolutions.ie/tracker.js"
          data-site-key="scholar"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
