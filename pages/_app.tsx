import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Footer from '../components/global/Footer';
import Header from '../components/global/Header';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
