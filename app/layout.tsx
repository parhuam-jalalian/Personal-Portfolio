import type { Metadata } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ReduxProvider } from "@/store/Provider";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Parhuam Jalalian - Software Engineer | Cloud & Full-Stack Developer",
  description: "Cloud applications, distributed systems, and full-stack projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${robotoMono.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
