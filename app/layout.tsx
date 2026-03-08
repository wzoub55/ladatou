import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LADATOU – Tout à 2€ | Magasin discount à Mayotte",
  description:
    "LADATOU est le magasin discount familial de Mayotte. Des centaines d'articles pour toute la famille : maison, cuisine, enfants, décoration et cadeaux – tous à 2€.",
  icons: {
    icon: "/img/logo.png",
    apple: "/img/logo.png",
  },
  keywords: [
    "LADATOU",
    "tout à 2€",
    "magasin discount",
    "Mayotte",
    "Kaweni",
    "Mamoudzou",
    "articles pas cher",
  ],
  openGraph: {
    title: "LADATOU – Tout à 2€",
    description:
      "Le magasin discount familial de Mayotte où tous les articles sont à 2€.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
