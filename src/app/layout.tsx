import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./cssReset.css";
import "./globals.css";

import { LayoutProvider } from "@/context/LayoutContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hilir | Dashboard",
  description: "Ad Performance Monitoring Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutProvider>
          {children}
          <ToastContainer />
        </LayoutProvider>
      </body>
    </html>
  );
}
