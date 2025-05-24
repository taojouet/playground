import path from 'path';
import matter from 'gray-matter';

export interface BlogImage {
  path: string;
  alt: {
    fr: string;
    en: string;
  };
}

export interface BlogPost {
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
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  images: BlogImage[];
  readTime: string;
  content: {
    fr: string;
    en: string;
  };
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

export async function getAllPosts(): Promise<BlogPost[]> {
  const { readdir, readFile } = await import('fs/promises');
  const blogDirectory = path.join(process.cwd(), 'content/blog');
  
  try {
    const fileNames = await readdir(blogDirectory);
    const allPostsData = await Promise.all(
      fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = await readFile(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          ...data,
          content: splitContentByLanguage(content),
        } as BlogPost;
      })
    );

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { readFile } = await import('fs/promises');
  const blogDirectory = path.join(process.cwd(), 'content/blog');
  
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = await readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      ...data,
      content: splitContentByLanguage(content),
    } as BlogPost;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.category === category);
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.tags.includes(tag));
} 