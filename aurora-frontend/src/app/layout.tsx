import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ProtectedLayout } from '@/components/layout/ProtectedLayout';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hospital Aurora - Sistema Médico',
  description: 'Sistema completo para gerenciamento hospitalar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <ProtectedLayout>
            {children}
          </ProtectedLayout>
        </AuthProvider>
      </body>
    </html>
  );
}