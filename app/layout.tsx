import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Azpe — Artista · Storyteller · Builder",
  description: "Hago documentales que cuentan lo que importa. Creo video que se siente como cine. Construyo herramientas con inteligencia artificial. Desde Guadalajara, para el mundo.",
  keywords: ["Daniel Azpe", "filmmaker", "documentalista", "storyteller", "Guadalajara", "Timeless Studios", "cine", "documental", "IA creativa"],
  authors: [{ name: "Daniel Azpe" }],
  creator: "Daniel Azpe",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://danielazpe.com",
    siteName: "Daniel Azpe",
    title: "Daniel Azpe — Storytelling that feels.",
    description: "Artista · Storyteller · Builder. Cine, documentales y creatividad con tecnología desde Guadalajara.",
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
    title: "Daniel Azpe — Storytelling that feels.",
    description: "Artista · Storyteller · Builder",
    images: ["/images/light-bokeh.jpg"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
