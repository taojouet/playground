import { useContext } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/components/ui/use-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
});

const quoteSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  company: z.string().optional(),
  phone: z.string().optional(),
  description: z.string().min(10, 'La description doit contenir au moins 10 caractères')
});

type ContactFormData = z.infer<typeof contactSchema>;
type QuoteFormData = z.infer<typeof quoteSchema>;

export default function Contact() {
  const { language } = useContext(LanguageContext);
  const t = content[language].contact;
  const { toast } = useToast();

  const contactForm = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const quoteForm = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmitContact = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log('Contact form data:', data);
      toast({
        title: t.form.successTitle,
        description: t.form.successMessage
      });
      contactForm.reset();
    } catch (error) {
      toast({
        title: t.form.errorTitle,
        description: t.form.errorMessage,
        variant: 'destructive'
      });
    }
  };

  const onSubmitQuote = async (data: QuoteFormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log('Quote form data:', data);
      toast({
        title: t.quote.successTitle,
        description: t.quote.successMessage
      });
      quoteForm.reset();
    } catch (error) {
      toast({
        title: t.quote.errorTitle,
        description: t.quote.errorMessage,
        variant: 'destructive'
      });
    }
  };

  const metaContent = {
    fr: {
      title: "Contact - Tao Jouet",
      description: "Contactez Tao Jouet pour discuter de vos projets ou demander un devis personnalisé. Expert en IoT, tech et industrie."
    },
    en: {
      title: "Contact - Tao Jouet",
      description: "Contact Tao Jouet to discuss your projects or request a custom quote. Expert in IoT, tech and industry."
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

        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-[#1E293B]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E293B]">{t.form.title}</CardTitle>
                <CardDescription className="text-[#64748B]">
                  {t.form.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={contactForm.handleSubmit(onSubmitContact)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#1E293B]">{t.form.labels.name}</Label>
                    <Input
                      id="name"
                      placeholder={t.form.placeholders.name}
                      className="border-[#1E293B]/10 focus:border-[#3B82F6]"
                      {...contactForm.register('name')}
                    />
                    {contactForm.formState.errors.name && (
                      <p className="text-sm text-red-500">{contactForm.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1E293B]">{t.form.labels.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t.form.placeholders.email}
                      className="border-[#1E293B]/10 focus:border-[#3B82F6]"
                      {...contactForm.register('email')}
                    />
                    {contactForm.formState.errors.email && (
                      <p className="text-sm text-red-500">{contactForm.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#1E293B]">{t.form.labels.message}</Label>
                    <Textarea
                      id="message"
                      placeholder={t.form.placeholders.message}
                      className="border-[#1E293B]/10 focus:border-[#3B82F6]"
                      {...contactForm.register('message')}
                    />
                    {contactForm.formState.errors.message && (
                      <p className="text-sm text-red-500">{contactForm.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90">
                    {t.form.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-[#1E293B]/10">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E293B]">{t.quote.title}</CardTitle>
                <CardDescription className="text-[#64748B]">
                  {t.quote.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={quoteForm.handleSubmit(onSubmitQuote)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="quote-name" className="text-[#1E293B]">{t.quote.labels.name}</Label>
                    <Input
                      id="quote-name"
                      placeholder={t.quote.placeholders.name}
                      className="border-[#1E293B]/10 focus:border-[#3B82F6]"
                      {...quoteForm.register('name')}
                    />
                    {quoteForm.formState.errors.name && (
                      <p className="text-sm text-red-500">{quoteForm.formState.errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-email" className="text-[#1E293B]">{t.quote.labels.email}</Label>
                    <Input
                      id="quote-email"
                      type="email"
                      placeholder={t.quote.placeholders.email}
                      className="border-[#1E293B]/10 focus:border-[#3B82F6]"
                      {...quoteForm.register('email')}
                    />
                    {quoteForm.formState.errors.email && (
                      <p className="text-sm text-red-500">{quoteForm.formState.errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-[#1E293B]">{t.quote.labels.company}</Label>
                    <Input
                      id="company"
                      placeholder={t.quote.placeholders.company}
                      className="border-[#1E293B]/10 focus:border-[#3B82F6]"
                      {...quoteForm.register('company')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-[#1E293B]">{t.quote.labels.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder={t.quote.placeholders.phone}
                      className="border-[#1E293B]/10 focus:border-[#3B82F6]"
                      {...quoteForm.register('phone')}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-[#1E293B]">{t.quote.labels.description}</Label>
                    <Textarea
                      id="description"
                      placeholder={t.quote.placeholders.description}
                      className="border-[#1E293B]/10 focus:border-[#3B82F6]"
                      {...quoteForm.register('description')}
                    />
                    {quoteForm.formState.errors.description && (
                      <p className="text-sm text-red-500">{quoteForm.formState.errors.description.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full bg-[#FB923C] hover:bg-[#FB923C]/90">
                    {t.quote.submit}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-6xl mt-16"
        >
          <Card className="border-[#1E293B]/10">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1E293B]">{t.directContact.title}</CardTitle>
              <CardDescription className="text-[#64748B]">
                {t.directContact.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="mailto:contact@taojouet.com"
                  className="flex items-center space-x-2 text-[#64748B] hover:text-[#3B82F6] transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@taojouet.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/taojouet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#64748B] hover:text-[#3B82F6] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/taojouet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#64748B] hover:text-[#3B82F6] transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </div>
              <p className="mt-6 text-sm text-[#64748B]">
                {t.directContact.note}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </>
  );
}