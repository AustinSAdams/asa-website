"use client";
import { usePathname } from 'next/navigation';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHomePage = (pathname === '/');
  const isExplorePage = (pathname === '/explore');

  return (
    <>
      {!isHomePage && <Header />}
      {children}
      {(!isHomePage && !isExplorePage) && <Footer />}
    </>
  );
}