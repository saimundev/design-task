import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: "../public/icon.png",
  title: "Win Store - Shop Computer & Experience",
  description: "Your one-stop shop for computers and electronics.",
  openGraph: {
    title: "Win Store - Shop Computer & Experience",
    description: "Your one-stop shop for computers and electronics.",
    url: "https://winstore.com",
    siteName: "Win Store",
    images: [
      {
        url: "../public/opengraph-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Win Store - Shop Computer & Experience",
    description: "Your one-stop shop for computers and electronics.",
    images: ["../public/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-sans`}>{children}</body>
    </html>
  );
}
