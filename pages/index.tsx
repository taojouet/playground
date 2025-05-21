import { useContext } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { ChevronRight, ArrowRight, Code, LineChart, Lightbulb, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const { language } = useContext(LanguageContext);
  const t = content[language].home;

  const metaContent = {
    fr: {
      title: "Tao Jouet - Expert IoT, Tech & Industrie",
      description: "Portfolio professionnel de Tao Jouet, expert en IoT, tech et industrie. Spécialiste en gestion de projet, développement logiciel, IA et protocoles industriels."
    },
    en: {
      title: "Tao Jouet - IoT, Tech & Industry Expert",
      description: "Professional portfolio of Tao Jouet, expert in IoT, tech and industry. Specialist in project management, software development, AI and industrial protocols."
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
          className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16"
        >
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E293B]">
            {t.greeting}
              <span className="text-[#3B82F6]"> Tao Jouet</span>
          </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-[#0F172A]">
            {t.title}
          </h2>
          
            <div className="relative my-8 p-6 bg-[#F1F5F9] rounded-lg border border-[#1E293B]/10">
              <p className="text-xl md:text-2xl italic text-[#1E293B] font-medium">
              &ldquo;{t.tagline}&rdquo;
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
          >
              <Button asChild size="lg" className="bg-[#3B82F6] hover:bg-[#3B82F6]/90">
              <Link href="/portfolio">
                {t.buttons.portfolio}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
              <Button asChild size="lg" variant="outline" className="border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10">
              <Link href="/cv">
                {t.buttons.cv}
              </Link>
            </Button>
              <Button asChild size="lg" variant="outline" className="border-[#FB923C] text-[#FB923C] hover:bg-[#FB923C]/10">
              <Link href="/contact">
                {t.buttons.contact}
              </Link>
            </Button>
          </motion.div>
          </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex-1 flex justify-center items-center"
        >
            <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 border-4 border-[#3B82F6] shadow-xl">
              <Image 
                src="/images/profile/profil.jpg" 
              alt="Tao Jouet"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                priority
                className="object-cover"
                quality={90}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Featured Projects */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">{t.featuredProjects.title}</h2>
              <Button asChild variant="ghost" className="text-[#3B82F6]">
                <Link href="/portfolio">
                  Voir tous les projets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.featuredProjects.items.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-text-secondary mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">{t.services.title}</h2>
              <Button asChild variant="ghost" className="text-[#3B82F6]">
                <Link href="/services">
                  Voir tous les services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.services.items.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {index === 0 && <Code className="h-6 w-6 text-[#3B82F6]" />}
                      {index === 1 && <LineChart className="h-6 w-6 text-[#3B82F6]" />}
                      {index === 2 && <Lightbulb className="h-6 w-6 text-[#3B82F6]" />}
                      {index === 3 && <BookOpen className="h-6 w-6 text-[#3B82F6]" />}
                      <h3 className="text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-text-secondary">{service.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}