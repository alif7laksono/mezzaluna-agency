import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mezzaluna Agency",
  description:
    "Mezzaluna Agency specializes in creating stunning, high-performance websites tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 text-gray-300 antialiased scroll-smooth`}
      > */}
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
