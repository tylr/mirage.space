import type { Metadata } from "next"
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
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://mirage.space"/>
        <meta property="og:title" content="La Mirage"/>
        <meta property="og:image" content="https://mirage.space/icon.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="1200"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:description" content="La Mirage is a band from Lenny + Tyler <3"/>
        <meta name="description" content="La Mirage is a band from Lenny + Tyler <3"/>
        <meta property="og:site_name" content="La Mirage"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="apple-touch-icon" href="/icon.png"/>
        <meta name="robots" content="max-image-preview:large"/>
      </head>
      <body>
        {children}
        <div className="background-container">
          <div className="background">
            {[...Array(100)].map(() => 'lamirage' )}
          </div>
        </div>
      </body>
    </html>
  );
}
