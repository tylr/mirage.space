import type { Metadata } from "next"
import Head from "next/head"
import "./globals.css"

export const metadata: Metadata = {
  title: "La Mirage",
  description: "La Mirage Band",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/swx0tcr.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
