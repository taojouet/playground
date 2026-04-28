import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLoginPage = router.pathname === '/login';

  return (
    <LanguageProvider>
      <div className={`${inter.className} min-h-screen flex flex-col`}>
        {!isLoginPage && <Header />}
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        {!isLoginPage && <Footer />}
      </div>
      <Toaster />
    </LanguageProvider>
  );
}
