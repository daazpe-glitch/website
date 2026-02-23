import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniel Azpe — Artista · Creador · Storyteller",
  description: "Creo cosas hermosas que trascienden. Documentales, producción cinematográfica, creatividad y tecnología.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
