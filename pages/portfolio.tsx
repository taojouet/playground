import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Tag } from 'lucide-react';
import { getAllProjects, Project } from '@/lib/projects';

export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: {
      projects
    }
  };
}

export default function Portfolio({ projects }: { projects: Project[] }) {
  const { language } = useContext(LanguageContext);
  const t = content[language].portfolio;

  const metaContent = {
    fr: {
      title: "Portfolio - Tao Jouet",
      description: "Découvrez mes projets dans le domaine de l'IoT, du développement logiciel et de l'industrie."
    },
    en: {
      title: "Portfolio - Tao Jouet",
      description: "Discover my projects in IoT, software development, and industry."
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

        {/* Construction Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-3xl text-center"
        >
          <Card className="border-[#1E293B]/10">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1E293B]">
                {language === 'fr' ? 'En construction' : 'Under construction'}
              </CardTitle>
              <CardDescription className="text-[#64748B] text-lg">
                {language === 'fr' 
                  ? 'Cette section est actuellement en cours de développement. Revenez bientôt pour découvrir mes projets dans le domaine de l\'IoT, du développement logiciel et de l\'industrie.'
                  : 'This section is currently under development. Come back soon to discover my projects in IoT, software development, and industry.'}
              </CardDescription>
            </CardHeader>
          </Card>
        </motion.div>

        {/* Projects Grid - Temporarily Commented
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${project.slug}`}>
                <Card className="h-full border-[#1E293B]/10 hover:border-[#3B82F6] transition-colors">
                  <div className="relative w-full h-48">
                    <Image
                      src={project.coverImage}
                      alt={project.title[language]}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#1E293B] line-clamp-2">
                      {project.title[language]}
                    </CardTitle>
                    <CardDescription className="text-[#64748B] line-clamp-2">
                      {project.description[language]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-[#64748B]">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(project.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4" />
                        <span>{project.category}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#F1F5F9] text-[#64748B] text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        */}

        {/* CTA Section */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-6xl mt-16 text-center"
        >
          <Card className="border-[#1E293B]/10 bg-[#F8FAFC]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1E293B]">{t.cta.title}</CardTitle>
              <CardDescription className="text-[#64748B]">
                {t.cta.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/contact">
                <Button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90">
                  {t.cta.button}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      */}
      </div>
    </>
  );
}