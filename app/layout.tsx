import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Dhinesh kumaran | Software Engineer",
  description: "Software Engineer portfolio showcasing full-stack systems, automation, and backend architectures.",
};

import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";
import AnalyticsEvents from "../components/AnalyticsEvents";
import Script from "next/script";
import CodingListener from "../components/CodingListener";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans bg-background text-foreground antialiased selection:bg-amber/30 selection:text-amber transition-colors duration-300`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WRC2PJNC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <Script id="gtm-data-layer" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
        </Script>
        <Script
          id="gtm-loader"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WRC2PJNC"
          strategy="afterInteractive"
        />
        <AnalyticsEvents />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="min-h-screen pt-28">
            {children}
          </main>
          
          <ThemeToggle />
          <CodingListener />
          
          <footer className="border-t border-border mt-20 py-8">
              <div className="max-w-4xl mx-auto px-6 text-center font-mono text-xs text-foreground/40">
                  EOF — {new Date().getFullYear()}
              </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
