import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400", // Bebas Neue has only one weight
});

export const metadata: Metadata = {
  title: "Inês Soares Silva",
  description: "Portfólio de criação de conteúdo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
