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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetBrainsMono.variable} font-sans bg-background text-foreground antialiased selection:bg-amber/30 selection:text-amber transition-colors duration-300`}>
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
