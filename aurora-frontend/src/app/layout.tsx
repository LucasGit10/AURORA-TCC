// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HydrationWrapper from "../components/HydrationWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aurora IA - A Revolução no Diagnóstico Médico",
  description: "Utilize o poder da Inteligência Artificial para obter pré-diagnósticos mais rápidos, precisos e seguros. Conheça a plataforma Aurora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-light text-secondary antialiased`}>
        <HydrationWrapper>
          {children}
        </HydrationWrapper>
      </body>
    </html>
  );
}