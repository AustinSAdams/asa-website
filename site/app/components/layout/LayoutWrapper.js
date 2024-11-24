"use client";
import { usePathname } from 'next/navigation';
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHomePage = (pathname === '/');

  return (
    <>
      {<Header />}
      {children}
      {(!isHomePage) && <Footer />}
    </>
  );
}