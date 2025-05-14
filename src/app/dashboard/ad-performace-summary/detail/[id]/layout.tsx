import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hilir | Detail",
  description: "Ad Performance Monitoring Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
