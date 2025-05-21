import { useContext } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { getProjectBySlug, getAllProjects } from '@/lib/projects';
import type { Project } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Calendar, Tag, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Composant personnalisé pour les images dans le contenu Markdown
const MarkdownImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="my-8 relative w-full aspect-video rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

// Composant personnalisé pour les liens dans le contenu Markdown
const MarkdownLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#3B82F6] hover:text-[#2563EB] underline transition-colors"
    >
      {children}
    </a>
  );
};

export async function getStaticPaths() {
  try {
    const projects = await getAllProjects();
    const paths = projects.map((project) => ({
      params: { slug: project.slug }
    }));

    return {
      paths,
      fallback: false
    };
  } catch (error) {
    console.error('Error generating static paths:', error);
    return {
      paths: [],
      fallback: false
    };
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  try {
    const project = await getProjectBySlug(params.slug);
    if (!project) {
      return {
        notFound: true
      };
    }
    return {
      props: {
        project
      }
    };
  } catch (error) {
    console.error(`Error fetching project ${params.slug}:`, error);
    return {
      notFound: true
    };
  }
}

export default function ProjectDetail({ project }: { project: Project }) {
  const { language } = useContext(LanguageContext);
  const router = useRouter();

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  const metaContent = {
    fr: {
      title: `${project.title.fr} - Projets - Tao Jouet`,
      description: project.description.fr
    },
    en: {
      title: `${project.title.en} - Projects - Tao Jouet`,
      description: project.description.en
    }
  };

  return (
    <>
      <Head>
        <title>{metaContent[language].title}</title>
        <meta name="description" content={metaContent[language].description} />
      </Head>

      <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center px-4 py-16 md:py-24">
        <div className="w-full max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/projects">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                {language === 'fr' ? 'Retour aux projets' : 'Back to projects'}
              </Button>
            </Link>
          </motion.div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden"
          >
            <Image
              src={project.coverImage}
              alt={project.title[language]}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E293B]">
              {project.title[language]}
            </h1>
            <p className="text-xl text-[#64748B] mb-6">
              {project.description[language]}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-[#64748B]">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(project.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                <span>{project.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>{project.client}</span>
              </div>
            </div>
          </motion.div>

          {/* Project Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose prose-lg max-w-none prose-headings:text-[#1E293B] prose-p:text-[#475569] prose-strong:text-[#1E293B] prose-ul:text-[#475569] prose-ol:text-[#475569] prose-li:text-[#475569] prose-blockquote:text-[#64748B] prose-blockquote:border-l-[#3B82F6] prose-hr:border-[#E2E8F0]"
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: MarkdownImage,
                a: MarkdownLink,
                code: ({ children }) => (
                  <code className="bg-[#1E293B] text-white px-2 py-1 rounded">
                    {children}
                  </code>
                ),
                h1: ({ children }) => <h1 className="text-4xl font-bold mt-12 mb-6">{children}</h1>,
                h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-3">{children}</h3>,
                p: ({ children }) => <p className="my-4 leading-7">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 pl-4 my-6 italic">{children}</blockquote>
                ),
                hr: () => <hr className="my-8 border-t-2" />,
                pre: ({ children }) => (
                  <pre className="bg-[#1E293B] text-white p-4 rounded-lg overflow-x-auto my-6">
                    {children}
                  </pre>
                ),
              }}
            >
              {project.content[language]}
            </ReactMarkdown>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold text-[#1E293B] mb-4">
              {language === 'fr' ? 'Technologies utilisées' : 'Technologies used'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#F1F5F9] text-[#64748B] text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 