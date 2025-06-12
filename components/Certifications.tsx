import { motion } from 'framer-motion';
import { content } from '@/data/content';

interface CertificationSection {
  title: string;
  color: string;
  items: string[];
}

interface CertificationsProps {
  language: 'fr' | 'en';
}

export function Certifications({ language }: CertificationsProps) {
  const t = content[language].cv.certifications;

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-[#1E293B]">{t.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(t).map(([key, section]) => {
          if (key === 'title') return null;
          const certSection = section as CertificationSection;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg border ${certSection.color} shadow-sm hover:shadow-md transition-shadow`}
            >
              <h4 className="text-lg font-semibold mb-4">{certSection.title}</h4>
              <ul className="space-y-2">
                {certSection.items.map((item: string, index: number) => (
                  <li key={index} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 