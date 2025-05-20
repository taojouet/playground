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

        {/* Services Preview Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-6xl mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-[#1E293B]">{t.services.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.services.items.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#1E293B]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#64748B]">{service.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 text-[#3B82F6] hover:text-[#3B82F6]/90">
                    En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Latest Projects Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-full max-w-6xl mt-16"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#1E293B]">Projets Récents</h2>
            <Button asChild variant="ghost" className="text-[#3B82F6]">
              <Link href="/portfolio">
                Voir tous les projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.featuredProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-[#1E293B]">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#64748B]">{project.description}</CardDescription>
                  <div className="flex gap-2 mt-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-[#F1F5F9] text-[#64748B] rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}