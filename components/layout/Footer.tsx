import { useContext } from 'react';
import Link from 'next/link';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Linkedin, Mail, Github } from 'lucide-react';

export default function Footer() {
  const { language } = useContext(LanguageContext);
  const t = content[language].footer;
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-dark text-white py-8 print:hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-300">
              &copy; {currentYear} Tao Jouet. {t.rights}
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="mailto:contact@taojouet.com" 
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/taojouet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/taojouet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center space-x-4 text-sm text-gray-400">
          <Link href="/" legacyBehavior>
            <a className="hover:text-white transition-colors">{t.links.home}</a>
          </Link>
          <Link href="/portfolio" legacyBehavior>
            <a className="hover:text-white transition-colors">{t.links.portfolio}</a>
          </Link>
          <Link href="/cv" legacyBehavior>
            <a className="hover:text-white transition-colors">{t.links.cv}</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="hover:text-white transition-colors">{t.links.contact}</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}