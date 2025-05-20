import { useContext } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: string;
}

export default function Portfolio() {
  const { language } = useContext(LanguageContext);
  const t = content[language].portfolio;

  const metaContent = {
    fr: {
      title: "Portfolio - Tao Jouet",
      description: "Découvrez les projets de Tao Jouet en IoT, développement logiciel, IA et solutions industrielles. Des réalisations innovantes et sur mesure."
    },
    en: {
      title: "Portfolio - Tao Jouet",
      description: "Discover Tao Jouet's projects in IoT, software development, AI and industrial solutions. Innovative and custom-made achievements."
    }
  };

  const projects: Project[] = [
    {
      id: 'iot-platform',
      title: 'Plateforme IoT Industrielle',
      description: 'Développement d\'une plateforme de monitoring industriel avec intégration de protocoles multiples.',
      image: '/images/projects/iot-platform.jpg',
      technologies: ['Node.js', 'React', 'Docker', 'MQTT'],
      githubUrl: 'https://github.com/taojouet/iot-platform',
      demoUrl: 'https://demo.iot-platform.com',
      category: 'IoT'
    },
    {
      id: 'energy-management',
      title: 'Système de Gestion Énergétique',
      description: 'Solution complète de monitoring et optimisation énergétique pour bâtiments intelligents.',
      image: '/images/projects/energy-management.jpg',
      technologies: ['Python', 'KNX', 'Modbus', 'React'],
      githubUrl: 'https://github.com/taojouet/energy-management',
      category: 'IoT'
    },
    {
      id: 'mobile-app',
      title: 'Application Mobile IoT',
      description: 'Application mobile cross-platform pour le contrôle et le monitoring d\'équipements IoT.',
      image: '/images/projects/mobile-app.jpg',
      technologies: ['React Native', 'Node.js', 'WebSocket'],
      githubUrl: 'https://github.com/taojouet/mobile-app',
      demoUrl: 'https://app.mobile-iot.com',
      category: 'Mobile'
    }
  ];

  const categories = Array.from(new Set(projects.map(project => project.category)));

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

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-6xl"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Badge
                key={category}
                variant="secondary"
                className="text-lg px-4 py-2 bg-[#F1F5F9] text-[#1E293B] hover:bg-[#E2E8F0]"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-[#1E293B]/10">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#1E293B]">{project.title}</CardTitle>
                    <CardDescription className="text-[#64748B]">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[#64748B] bg-[#F1F5F9]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6]/10"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-[#FB923C] text-[#FB923C] hover:bg-[#FB923C]/10"
                          asChild
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-6xl mt-16 text-center"
        >
          <div className="relative p-8 bg-[#F1F5F9] rounded-lg border border-[#1E293B]/10">
            <h2 className="text-2xl font-bold mb-4 text-[#1E293B]">{t.cta.title}</h2>
            <p className="text-[#64748B] mb-8 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <Button asChild size="lg" className="bg-[#FB923C] hover:bg-[#FB923C]/90">
              <Link href="/contact">
                {t.cta.button}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
}