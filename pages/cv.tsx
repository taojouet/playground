import { useContext } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Printer, Download, Mail, Linkedin, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { LanguageContext } from '@/contexts/LanguageContext';
import { content } from '@/data/content';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function CV() {
  const { language } = useContext(LanguageContext);
  const t = content[language].cv;

  const metaContent = {
    fr: {
      title: "CV - Tao Jouet",
      description: "Curriculum Vitae de Tao Jouet, expert en IoT, tech et industrie. Expérience en gestion de projet, développement logiciel, IA et protocoles industriels."
    },
    en: {
      title: "CV - Tao Jouet",
      description: "Curriculum Vitae of Tao Jouet, expert in IoT, tech and industry. Experience in project management, software development, AI and industrial protocols."
    }
  };

  const handlePrint = () => {
    window.print();
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
          className="w-full max-w-6xl text-center mb-2"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1E293B]">
            {t.title}
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          </motion.div>
        </motion.div>

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-8 print:shadow-none print:p-0 max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-4 print:mb-6">
              <h2 className="text-3xl font-bold text-blue-dark print:text-2xl">Tao Jouet</h2>
              <p className="text-xl font-medium text-blue-electric print:text-lg mt-2">{t.jobTitle}</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 text-text-secondary print:text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Aix-en-Provence, France</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:taoujouet@gmail.com" className="hover:text-blue-electric">taoujouet@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  <a href="https://linkedin.com/in/taojouet" target="_blank" rel="noopener noreferrer" className="hover:text-blue-electric">linkedin.com/in/taojouet</a>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900">{content[language].cv.skills.title[language]}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="border border-gray-200 p-6 rounded-sm">
                    <h3 className="text-lg font-medium mb-4 text-gray-900 border-b border-gray-200 pb-2">{content[language].cv.skills.programming[language]}</h3>
                    <ul className="space-y-4">
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Langages</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Python</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">JavaScript</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">C/C++</Badge>
                        </div>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Bases de données</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">SQL</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">NoSQL</Badge>
                        </div>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Web</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">HTML/CSS</Badge>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-sm">
                    <h3 className="text-lg font-medium mb-4 text-gray-900 border-b border-gray-200 pb-2">{content[language].cv.skills.technologies[language]}</h3>
                    <ul className="space-y-4">
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">IoT</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Arduino</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Raspberry Pi</Badge>
                        </div>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Cloud</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">AWS</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Azure</Badge>
                        </div>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Développement Web</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">React</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Node.js</Badge>
                        </div>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">DevOps</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Docker</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Kubernetes</Badge>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-6 rounded-sm">
                    <h3 className="text-lg font-medium mb-4 text-gray-900 border-b border-gray-200 pb-2">{content[language].cv.skills.tools[language]}</h3>
                    <ul className="space-y-4">
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Version Control</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Git</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">GitHub</Badge>
                        </div>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Gestion de Projet</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Jira</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">Confluence</Badge>
                        </div>
                      </li>
                      <li>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">IDE</span>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">VS Code</Badge>
                          <Badge variant="outline" className="bg-white text-gray-700 border-gray-300">IntelliJ</Badge>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8 print:mb-4">
              <h3 className="text-xl font-semibold text-blue-dark border-b border-gray-200 pb-2 mb-4 print:text-lg">{t.sections.experience}</h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-blue-electric">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-electric"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h4 className="text-lg font-medium text-blue-dark print:text-base">WIIO – {t.experience.wiio.title}</h4>
                      <div className="flex items-center gap-2 text-text-secondary print:text-sm mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{t.experience.wiio.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary print:text-sm font-medium mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{t.experience.wiio.date}</span>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc list-inside print:text-sm space-y-1">
                    {t.experience.wiio.responsibilities.map((item, index) => (
                      <li key={index} className="text-text-primary">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-blue-electric">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-electric"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h4 className="text-lg font-medium text-blue-dark print:text-base">SYNOX – {t.experience.synox.title}</h4>
                      <div className="flex items-center gap-2 text-text-secondary print:text-sm mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{t.experience.synox.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary print:text-sm font-medium mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{t.experience.synox.date}</span>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc list-inside print:text-sm space-y-1">
                    {t.experience.synox.responsibilities.map((item, index) => (
                      <li key={index} className="text-text-primary">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-blue-electric">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-electric"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <h4 className="text-lg font-medium text-blue-dark print:text-base">Institut d'Électronique et des Systèmes – {t.experience.ies.title}</h4>
                      <div className="flex items-center gap-2 text-text-secondary print:text-sm mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{t.experience.ies.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary print:text-sm font-medium mt-1 sm:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{t.experience.ies.date}</span>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc list-inside print:text-sm space-y-1">
                    {t.experience.ies.responsibilities.map((item, index) => (
                      <li key={index} className="text-text-primary">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8 print:mb-4">
              <h3 className="text-xl font-semibold text-blue-dark border-b border-gray-200 pb-2 mb-4 print:text-lg">{t.sections.education}</h3>
              <div className="space-y-4">
                {t.education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-blue-electric">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-electric"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <h4 className="text-lg font-medium text-blue-dark print:text-base">{edu.degree}</h4>
                      <div className="flex items-center gap-2 text-text-secondary print:text-sm font-medium mt-1 sm:mt-0">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.year}</span>
                      </div>
                    </div>
                    <p className="text-text-secondary print:text-sm mt-1">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-8 print:mb-4">
              <h3 className="text-xl font-semibold text-blue-dark border-b border-gray-200 pb-2 mb-4 print:text-lg">{t.sections.certifications}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">{content[language].cv.certifications.google.title}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {content[language].cv.certifications.google.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{content[language].cv.certifications.semrush.title}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {content[language].cv.certifications.semrush.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{content[language].cv.certifications.hubspot.title}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {content[language].cv.certifications.hubspot.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{content[language].cv.certifications.ademe.title}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {content[language].cv.certifications.ademe.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{content[language].cv.certifications.sulitest.title}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {content[language].cv.certifications.sulitest.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{content[language].cv.certifications.anssi.title}</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {content[language].cv.certifications.anssi.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-blue-dark border-b border-gray-200 pb-2 mb-4 print:text-lg">{t.sections.languages}</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Français (Natif)</li>
                <li>Anglais (Courant)</li>
                <li>Espagnol (Intermédiaire)</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-medium text-gray-900 mb-4">Intéressé par des projets innovants ?</h3>
          <p className="text-gray-600 mb-6">
            Je suis toujours ouvert à discuter de nouvelles opportunités et collaborations dans le domaine de l'innovation technologique.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline"
              className="flex items-center gap-2 border-gray-300 hover:border-blue-500 hover:text-blue-500"
              onClick={() => window.location.href = 'mailto:taoujouet@gmail.com'}
            >
              <Mail className="h-4 w-4" />
              taoujouet@gmail.com
            </Button>
            <Button 
              variant="outline"
              className="flex items-center gap-2 border-gray-300 hover:border-blue-500 hover:text-blue-500"
              onClick={() => window.open('https://linkedin.com/in/taojouet', '_blank')}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8"
        >
          <Button 
            onClick={handlePrint} 
            className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-6 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <Printer className="mr-2 h-4 w-4" />
            {t.buttons.print}
          </Button>
        </motion.div>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            margin: 1cm;
          }
          body {
            font-size: 12pt;
            line-height: 1.3;
          }
          nav, footer, button, .print\\:hidden,
          header, #__next > div > div:first-child {
            display: none !important;
          }
          .container {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          @page :first {
            margin-top: 0;
          }
          @page {
            size: A4;
          }
        }
      `}</style>
    </>
  );
}