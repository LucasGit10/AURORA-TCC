'use client';

import { usePathname } from 'next/navigation';
import { MainLayout } from './MainLayout';

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const pathname = usePathname();
  
  if (pathname?.startsWith('/login') || pathname?.startsWith('/register')) {
    return <>{children}</>;
  }

  return <MainLayout>{children}</MainLayout>;
};