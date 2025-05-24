import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Menu, X, Languages, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { language, setLanguage } = useContext(LanguageContext);
  const t = content[language].navigation;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [router.pathname]);

  const isActive = (path: string) => router.pathname === path;

  const navItems = [
    { name: t.home, path: '/' },
    { name: t.portfolio, path: '/portfolio' },
    { name: t.services, path: '/services' },
    { name: t.blog, path: '/blog' },
    { name: t.cv, path: '/cv' },
    { name: t.contact, path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 print:hidden ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" legacyBehavior>
            <a className="text-xl font-bold text-blue-dark hover:text-blue-electric transition-colors">
              Tao Jouet
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link href={item.path} key={item.path} legacyBehavior>
                <a
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-blue-electric bg-blue-electric/10'
                      : 'text-text-primary hover:text-blue-electric hover:bg-blue-electric/5'
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-2 text-[#64748B] hover:text-[#3B82F6]"
                >
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  className={language === 'fr' ? 'text-[#3B82F6]' : 'text-[#64748B]'}
                  onClick={() => setLanguage('fr')}
                >
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={language === 'en' ? 'text-[#3B82F6]' : 'text-[#64748B]'}
                  onClick={() => setLanguage('en')}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mr-2 text-[#64748B] hover:text-[#3B82F6]"
                >
                  <Languages className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem
                  className={language === 'fr' ? 'text-[#3B82F6]' : 'text-[#64748B]'}
                  onClick={() => setLanguage('fr')}
                >
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={language === 'en' ? 'text-[#3B82F6]' : 'text-[#64748B]'}
                  onClick={() => setLanguage('en')}
                >
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-md"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link href={item.path} key={item.path} legacyBehavior>
                    <a
                      className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-blue-electric bg-blue-electric/10'
                          : 'text-text-primary hover:text-blue-electric hover:bg-blue-electric/5'
                      }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}