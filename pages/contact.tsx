import { useContext } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Linkedin, Github } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const t = content[language].contact;

  const metaContent = {
    fr: {
      title: "Contact - Tao Jouet",
      description: "Contactez Tao Jouet pour discuter de vos projets ou demander un devis pour un besoin spécifique. Expert en IoT, tech et industrie."
    },
    en: {
      title: "Contact - Tao Jouet",
      description: "Contact Tao Jouet to discuss your projects or request a custom quote for a specific need. IoT, tech and industry expert."
    }
  };

  return (
    <>
      <Head>
        <title>{metaContent[language].title}</title>
        <meta name="description" content={metaContent[language].description} />
      </Head>

      <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center gap-8 px-4 py-16 md:py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E293B]">
            {t.title}
          </h1>
          <p className="text-xl text-[#64748B] max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="w-full max-w-3xl">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-[#1E293B]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E293B]">{t.form.title}</CardTitle>
                <CardDescription className="text-[#64748B]">
                  {t.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}