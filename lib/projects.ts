import path from 'path';
import matter from 'gray-matter';

export interface ProjectImage {
  path: string;
  alt: {
    fr: string;
    en: string;
  };
}

export interface Project {
  slug: string;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  date: string;
  client: string;
  category: string;
  tags: string[];
  coverImage: string;
  images: ProjectImage[];
  technologies: string[];
  content: {
    fr: string;
    en: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

function splitContentByLanguage(content: string): { fr: string; en: string } {
  const parts = content.split('---');
  const frContent = parts[0].trim();
  const enContent = parts[1]?.trim() || '';

  return {
    fr: frContent,
    en: enContent
  };
}

export async function getAllProjects(): Promise<Project[]> {
  const { readdir, readFile } = await import('fs/promises');
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  
  try {
    const fileNames = await readdir(projectsDirectory);
    const allProjectsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = await readFile(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          ...data,
          content: splitContentByLanguage(content),
        } as Project;
      })
    );

    return allProjectsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading projects:', error);
    return [];
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { readFile } = await import('fs/promises');
  const projectsDirectory = path.join(process.cwd(), 'content/projects');
  
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content: splitContentByLanguage(content),
    } as Project;
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.category === category);
}

export async function getProjectsByTag(tag: string): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.tags.includes(tag));
} 