import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, LineChart, Lightbulb, BookOpen } from 'lucide-react';

export default function Services() {
  const { language } = useContext(LanguageContext);
  const t = content[language].services;

  const serviceIcons = {
    web: <Code className="h-6 w-6" />,
    technical: <LineChart className="h-6 w-6" />,
    strategic: <Lightbulb className="h-6 w-6" />,
    training: <BookOpen className="h-6 w-6" />
  };

  const metaContent = {
    fr: {
      title: "Services - Tao Jouet",
      description: "Services professionnels de Tao Jouet : création de sites web, audit technique, audit stratégique et formation en IA. Solutions sur mesure pour votre entreprise."
    },
    en: {
      title: "Services - Tao Jouet",
      description: "Professional services by Tao Jouet: web development, technical audit, strategic audit and AI training. Custom solutions for your business."
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

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {Object.entries(t.services).map(([key, service], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-[#1E293B]/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-[#F1F5F9] rounded-lg text-[#3B82F6]">
                      {serviceIcons[key as keyof typeof serviceIcons]}
                    </div>
                    <CardTitle className="text-2xl text-[#1E293B]">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-[#64748B]">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-[#64748B]">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10"
                    asChild
                  >
                    <Link href="/contact">
                      {t.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-6xl mt-16 text-center"
        >
          <div className="relative p-8 bg-[#F1F5F9] rounded-lg border border-[#1E293B]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#1E293B]">{t.contact.title}</h2>
            <p className="text-[#64748B] mb-8 max-w-2xl mx-auto">
              {t.contact.description}
            </p>
            <Button asChild size="lg" className="bg-[#FB923C] hover:bg-[#FB923C]/90">
              <Link href="/contact">
                {t.contact.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
} 