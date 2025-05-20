import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, Tag } from 'lucide-react';
import { getAllPosts, BlogPost } from '@/lib/blog';

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts
    }
  };
}

export default function Blog({ posts }: { posts: BlogPost[] }) {
  const { language } = useContext(LanguageContext);
  const t = content[language].blog;

  const metaContent = {
    fr: {
      title: "Blog - Tao Jouet",
      description: "Articles et réflexions sur l'IoT, l'intelligence artificielle, et les technologies émergentes."
    },
    en: {
      title: "Blog - Tao Jouet",
      description: "Articles and thoughts on IoT, artificial intelligence, and emerging technologies."
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

        {/* Blog Posts Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full border-[#1E293B]/10 hover:border-[#3B82F6] transition-colors">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.coverImage}
                      alt={post.title[language]}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#1E293B] line-clamp-2">
                      {post.title[language]}
                    </CardTitle>
                    <CardDescription className="text-[#64748B] line-clamp-2">
                      {post.description[language]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-[#64748B]">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#F1F5F9] text-[#64748B] text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-6xl mt-16"
        >
          <Card className="border-[#1E293B]/10 bg-[#F8FAFC]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1E293B]">{t.newsletter.title}</CardTitle>
              <CardDescription className="text-[#64748B]">
                {t.newsletter.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 border-[#1E293B]/10 focus:border-[#3B82F6]"
                />
                <Button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90">
                  {t.newsletter.button}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
} 