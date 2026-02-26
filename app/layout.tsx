import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Azpe — Documentalista · Filmmaker",
  description: "Documentales de impacto y video cinematográfico para marcas. Desde Guadalajara, para el mundo.",
  keywords: ["Daniel Azpe", "filmmaker", "documentalista", "storyteller", "Guadalajara", "Timeless Studios", "cine", "documental", "IA creativa"],
  authors: [{ name: "Daniel Azpe" }],
  creator: "Daniel Azpe",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://danielazpe.com",
    siteName: "Daniel Azpe",
    title: "Daniel Azpe — Documentalista · Filmmaker",
    description: "Documentales de impacto y video cinematográfico para marcas. Guadalajara, MX.",
    images: [
      {
        url: "/images/light-bokeh.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Azpe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Azpe — Documentalista · Filmmaker",
    description: "Documentalista · Filmmaker · Guadalajara, MX",
    images: ["/images/light-bokeh.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "https://danielazpe.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
