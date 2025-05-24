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

export default function Projects({ projects }: { projects: Project[] }) {
  const { language } = useContext(LanguageContext);
  const t = content[language].projects;

  const metaContent = {
    fr: {
      title: "Projets - Tao Jouet",
      description: "Découvrez mes projets en IoT, développement web et solutions techniques innovantes."
    },
    en: {
      title: "Projects - Tao Jouet",
      description: "Discover my projects in IoT, web development and innovative technical solutions."
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`}>
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
      </div>
    </>
  );
} 