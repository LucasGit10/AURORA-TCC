import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hospital Aurora - Acesso',
  description: 'Sistema hospitalar - Área de acesso',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
          <div className="auth-container">
            {children}
          </div>
      </body>
    </html>
  );
}