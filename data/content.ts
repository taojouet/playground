export const content = {
  fr: {
    navigation: {
      home: 'Accueil',
      portfolio: 'Portfolio',
      cv: 'CV',
      contact: 'Contact',
      services: 'Services',
      blog: 'Blog'
    },
    home: {
      greeting: 'Bonjour, je suis',
      title: 'Expert IoT, Tech & Industrie',
      tagline: 'Je transforme vos défis techniques en solutions innovantes',
      buttons: {
        portfolio: 'Voir mon portfolio',
        cv: 'Mon CV',
        contact: 'Me contacter'
      },
      services: {
        title: 'Services Professionnels',
        items: [
          {
            title: 'Création de sites web',
            description: 'Développement de sites web modernes et performants avec les dernières technologies web.'
          },
          {
            title: 'Audit technique',
            description: 'Évaluation approfondie de vos systèmes et infrastructure pour optimiser vos performances.'
          },
          {
            title: 'Audit stratégique',
            description: 'Analyse de votre stratégie digitale et recommandations pour votre transformation numérique.'
          },
          {
            title: 'Formation IA',
            description: 'Formations sur mesure pour maîtriser l\'intelligence artificielle et ses applications.'
          }
        ]
      },
      featuredProjects: [
        {
          title: 'Plateforme IoT Industrielle',
          description: 'Développement d\'une plateforme de monitoring industriel avec intégration de protocoles multiples.',
          technologies: ['Node.js', 'React', 'Docker', 'MQTT']
        },
        {
          title: 'Système de Gestion Énergétique',
          description: 'Solution complète de monitoring et optimisation énergétique pour bâtiments intelligents.',
          technologies: ['Python', 'KNX', 'Modbus', 'React']
        },
        {
          title: 'Application Mobile IoT',
          description: 'Application mobile cross-platform pour le contrôle et le monitoring d\'équipements IoT.',
          technologies: ['React Native', 'Node.js', 'WebSocket']
        }
      ]
    },
    portfolio: {
      pageTitle: 'Portfolio',
      pageDescription: 'Découvrez mes projets dans le domaine de l\'IoT, du développement logiciel et de l\'industrie.',
      title: 'Mes Projets',
      subtitle: 'Explorez une sélection de mes réalisations dans le domaine de l\'IoT et du développement logiciel.',
      cta: {
        title: 'Vous avez un projet en tête ?',
        description: 'Je suis toujours ouvert à discuter de nouveaux projets, idées créatives ou opportunités de collaboration.',
        button: 'Discutons de votre projet'
      }
    },
    cv: {
      pageTitle: 'Curriculum Vitae',
      pageDescription: 'CV de Tao Jouet, Chef de projet & Expert IoT basé à Aix-en-Provence, spécialisé dans l\'intégration IoT pour l\'industrie.',
      title: 'Mon Curriculum Vitae',
      jobTitle: 'Chef de projet & Expert IoT',
      buttons: {
        print: 'Imprimer',
        download: 'Télécharger PDF'
      },
      sections: {
        skills: 'Compétences',
        experience: 'Expérience professionnelle',
        education: 'Formation',
        certifications: 'Certifications',
        languages: 'Langues'
      },
      skills: [
        'Chefferie de projet IoT',
        'Avant-vente technique',
        'Intégration de protocoles industriels (KNX, Modbus, M-Bus, CAN, NMEA2000)',
        'Développement microservices (Node.js, Python)',
        'DevOps (Docker, Azure DevOps)',
        'Automatisation CI/CD',
        'Expertise réseaux IoT (LoRaWAN, Sigfox, NB-IoT, LTE-M)'
      ],
      experience: {
        wiio: {
          title: 'Chef de projet & expert IoT (Alternance)',
          location: 'Aix-en-Provence',
          date: 'Depuis octobre 2024',
          responsibilities: [
            'Pilotage de projets IoT grands comptes',
            'Avant-vente technique et accompagnement commercial',
            'Déploiement terrain et coordination technique'
          ]
        },
        synox: {
          title: 'Chef de projet IoT / Développeur',
          location: 'Montpellier',
          date: 'Octobre 2020 à octobre 2024',
          responsibilities: [
            'Développement de microservices en Node.js',
            'Intégration de protocoles industriels et réseaux LPWAN',
            'Automatisation CI/CD avec Docker et Azure DevOps'
          ]
        },
        ies: {
          title: 'Stagiaire R&D',
          location: 'Montpellier',
          date: 'Mars à juillet 2020',
          responsibilities: [
            'Conception d\'un espace immersif pour le projet HUT',
            'Électronique, modélisation 3D, IHM'
          ]
        }
      },
      education: [
        {
          degree: 'Mastère Spécialisé - Innovation, Transformation et Entrepreneuriat',
          institution: 'KEDGE Business School',
          year: '2024 - 2025'
        },
        {
          degree: 'Master BAC+5 - Manager en Architecture Logicielle du SI',
          institution: 'CESI',
          year: '2022 - 2024'
        },
        {
          degree: 'Bachelor BAC+3 - Responsable en Ingénierie Logicielle',
          institution: 'CESI',
          year: '2021 - 2022'
        },
        {
          degree: 'Licence Pro - Systèmes Embarqués',
          institution: 'Pôle Formation IJIMM Occitanie',
          year: '2020 - 2021'
        },
        {
          degree: 'DUT - GEII',
          institution: 'IUT Montpellier-Sète',
          year: '2017 - 2020'
        },
        {
          degree: 'Bac Scientifique',
          institution: 'Lycée Jean Mermoz - Dakar',
          year: '2017'
        }
      ],
      certifications: [
        'SecNum Académie (ANSSI) - 2023',
        'Sustainability Knowledge Certificate (Sulitest) - 2025',
        'Comprendre la transition bas carbone (ADEME) - 2025'
      ],
      languages: [
        'Français : natif',
        'Anglais : bilingue'
      ]
    },
    contact: {
      pageTitle: 'Contact',
      pageDescription: 'Contactez Tao Jouet, Chef de projet & Expert IoT pour discuter de vos projets IoT et de développement logiciel.',
      title: 'Contactez-moi',
      subtitle: 'Vous avez un projet ou une question ? N\'hésitez pas à me contacter via le formulaire ci-dessous ou directement par email.',
      form: {
        title: 'Formulaire de contact',
        description: 'Remplissez le formulaire ci-dessous pour me contacter directement',
        labels: {
          name: 'Nom',
          email: 'Email',
          message: 'Message'
        },
        placeholders: {
          name: 'Votre nom',
          email: 'votre.email@exemple.com',
          message: 'Votre message...'
        },
        submit: 'Envoyer',
        submitting: 'Envoi en cours...',
        successTitle: 'Message envoyé',
        successMessage: 'Merci pour votre message ! Je vous répondrai dans les plus brefs délais.',
        errorTitle: 'Erreur',
        errorMessage: 'Un problème est survenu lors de l\'envoi de votre message. Veuillez réessayer.'
      },
      quote: {
        title: 'Demande de devis',
        description: 'Remplissez ce formulaire pour obtenir un devis personnalisé pour votre projet',
        labels: {
          name: 'Nom',
          email: 'Email',
          company: 'Entreprise',
          phone: 'Téléphone',
          description: 'Description du projet'
        },
        placeholders: {
          name: 'Votre nom',
          email: 'votre.email@exemple.com',
          company: 'Nom de votre entreprise (facultatif)',
          phone: 'Votre numéro de téléphone (facultatif)',
          description: 'Décrivez votre projet et vos besoins...'
        },
        submit: 'Demander un devis',
        successTitle: 'Demande envoyée',
        successMessage: 'Merci pour votre demande ! Je vous enverrai un devis personnalisé dans les plus brefs délais.',
        errorTitle: 'Erreur',
        errorMessage: 'Un problème est survenu lors de l\'envoi de votre demande. Veuillez réessayer.'
      },
      directContact: {
        title: 'Contact direct',
        description: 'Préférez me contacter directement ? Voici mes coordonnées :',
        email: 'Email',
        linkedin: 'LinkedIn',
        note: 'Je suis généralement disponible du lundi au vendredi, de 9h à 18h (CET).'
      }
    },
    footer: {
      rights: 'Tous droits réservés.',
      links: {
        home: 'Accueil',
        portfolio: 'Portfolio',
        services: 'Services',
        cv: 'CV',
        blog: 'Blog',
        contact: 'Contact'
      }
    },
    services: {
      title: 'Services Professionnels',
      subtitle: 'Des solutions sur mesure pour répondre à vos besoins en développement, audit et formation.',
      cta: 'Demander un devis',
      services: {
        web: {
          title: 'Création de sites web',
          description: 'Développement de sites web modernes et performants avec les dernières technologies web.',
          features: [
            'Sites vitrines et e-commerce',
            'Applications web progressives (PWA)',
            'Optimisation SEO et performance',
            'Design responsive et moderne'
          ]
        },
        technical: {
          title: 'Audit technique',
          description: 'Évaluation approfondie de vos systèmes et infrastructure pour optimiser vos performances.',
          features: [
            'Analyse de l\'architecture technique',
            'Audit de sécurité',
            'Optimisation des performances',
            'Recommandations techniques'
          ]
        },
        strategic: {
          title: 'Audit stratégique',
          description: 'Analyse de votre stratégie digitale et recommandations pour votre transformation numérique.',
          features: [
            'Analyse de la maturité digitale',
            'Étude de la concurrence',
            'Recommandations stratégiques',
            'Plan d\'action détaillé'
          ]
        },
        training: {
          title: 'Formation IA',
          description: 'Formations sur mesure pour maîtriser l\'intelligence artificielle et ses applications.',
          features: [
            'Introduction à l\'IA et au machine learning',
            'Applications pratiques de l\'IA',
            'Intégration de l\'IA dans vos projets',
            'Suivi personnalisé'
          ]
        }
      },
      contact: {
        title: 'Prêt à démarrer votre projet ?',
        description: 'Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé.',
        button: 'Me contacter'
      }
    },
    blog: {
      title: 'Blog',
      subtitle: 'Articles et réflexions sur l\'IoT, l\'intelligence artificielle, et les technologies émergentes.',
      newsletter: {
        title: 'Restez informé',
        description: 'Inscrivez-vous à ma newsletter pour recevoir mes derniers articles et actualités.',
        button: 'S\'inscrire à la newsletter'
      }
    }
  },
  en: {
    navigation: {
      home: 'Home',
      portfolio: 'Portfolio',
      cv: 'Resume',
      contact: 'Contact',
      services: 'Services',
      blog: 'Blog'
    },
    home: {
      greeting: 'Hello, I\'m',
      title: 'IoT, Tech & Industry Expert',
      tagline: 'I transform your technical challenges into innovative solutions',
      buttons: {
        portfolio: 'View Portfolio',
        cv: 'My Resume',
        contact: 'Contact Me'
      },
      services: {
        title: 'Professional Services',
        items: [
          {
            title: 'Web Development',
            description: 'Development of modern and performant websites using the latest web technologies.'
          },
          {
            title: 'Technical Audit',
            description: 'In-depth evaluation of your systems and infrastructure to optimize performance.'
          },
          {
            title: 'Strategic Audit',
            description: 'Analysis of your digital strategy and recommendations for digital transformation.'
          },
          {
            title: 'AI Training',
            description: 'Customized training to master artificial intelligence and its applications.'
          }
        ]
      },
      featuredProjects: [
        {
          title: 'Industrial IoT Platform',
          description: 'Development of an industrial monitoring platform with multiple protocol integration.',
          technologies: ['Node.js', 'React', 'Docker', 'MQTT']
        },
        {
          title: 'Energy Management System',
          description: 'Complete solution for energy monitoring and optimization in smart buildings.',
          technologies: ['Python', 'KNX', 'Modbus', 'React']
        },
        {
          title: 'IoT Mobile Application',
          description: 'Cross-platform mobile application for IoT device control and monitoring.',
          technologies: ['React Native', 'Node.js', 'WebSocket']
        }
      ]
    },
    portfolio: {
      pageTitle: 'Portfolio',
      pageDescription: 'Discover my projects in IoT, software development, and industry.',
      title: 'My Projects',
      subtitle: 'Explore a selection of my work in IoT and software development.',
      cta: {
        title: 'Have a project in mind?',
        description: 'I\'m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
        button: 'Let\'s discuss your project'
      }
    },
    cv: {
      pageTitle: 'Resume',
      pageDescription: 'Resume of Tao Jouet, Project Manager & IoT Expert based in Aix-en-Provence, specialized in IoT integration for industry.',
      title: 'My Resume',
      jobTitle: 'Project Manager & IoT Expert',
      buttons: {
        print: 'Print',
        download: 'Download PDF'
      },
      sections: {
        skills: 'Skills',
        experience: 'Professional Experience',
        education: 'Education',
        certifications: 'Certifications',
        languages: 'Languages'
      },
      skills: [
        'IoT Project Management',
        'Technical Pre-Sales',
        'Industrial Protocol Integration (KNX, Modbus, M-Bus, CAN, NMEA2000)',
        'Microservices Development (Node.js, Python)',
        'DevOps (Docker, Azure DevOps)',
        'CI/CD Automation',
        'IoT Network Expertise (LoRaWAN, Sigfox, NB-IoT, LTE-M)'
      ],
      experience: {
        wiio: {
          title: 'Project Manager & IoT Expert (Work-Study)',
          location: 'Aix-en-Provence, France',
          date: 'Since October 2024',
          responsibilities: [
            'Key account IoT project management',
            'Technical pre-sales and commercial support',
            'Field deployment and technical coordination'
          ]
        },
        synox: {
          title: 'IoT Project Manager / Developer',
          location: 'Montpellier, France',
          date: 'October 2020 to October 2024',
          responsibilities: [
            'Node.js microservices development',
            'Industrial protocols and LPWAN networks integration',
            'CI/CD automation with Docker and Azure DevOps'
          ]
        },
        ies: {
          title: 'R&D Intern',
          location: 'Montpellier, France',
          date: 'March to July 2020',
          responsibilities: [
            'Design of an immersive space for the HUT project',
            'Electronics, 3D modeling, HMI'
          ]
        }
      },
      education: [
        {
          degree: 'Specialized Master\'s Degree - Innovation, Transformation and Entrepreneurship',
          institution: 'KEDGE Business School',
          year: '2024 - 2025'
        },
        {
          degree: 'Master\'s Degree - Software Architecture Manager',
          institution: 'CESI',
          year: '2022 - 2024'
        },
        {
          degree: 'Bachelor\'s Degree - Software Engineering Manager',
          institution: 'CESI',
          year: '2021 - 2022'
        },
        {
          degree: 'Professional License - Embedded Systems',
          institution: 'Pôle Formation IJIMM Occitanie',
          year: '2020 - 2021'
        },
        {
          degree: 'Technical Degree - Electrical Engineering & Industrial Computing',
          institution: 'IUT Montpellier-Sète',
          year: '2017 - 2020'
        },
        {
          degree: 'Scientific Baccalaureate',
          institution: 'Lycée Jean Mermoz - Dakar, Senegal',
          year: '2017'
        }
      ],
      certifications: [
        'SecNum Academy (ANSSI) - 2023',
        'Sustainability Knowledge Certificate (Sulitest) - 2025',
        'Understanding the Low-Carbon Transition (ADEME) - 2025'
      ],
      languages: [
        'French: native',
        'English: bilingual'
      ]
    },
    contact: {
      pageTitle: 'Contact',
      pageDescription: 'Contact Tao Jouet, Project Manager & IoT Expert to discuss your IoT and software development projects.',
      title: 'Contact Me',
      subtitle: 'Have a project or question? Feel free to contact me using the form below or directly via email.',
      form: {
        title: 'Contact Form',
        description: 'Fill out the form below to contact me directly',
        labels: {
          name: 'Name',
          email: 'Email',
          message: 'Message'
        },
        placeholders: {
          name: 'Your name',
          email: 'your.email@example.com',
          message: 'Your message...'
        },
        submit: 'Send',
        submitting: 'Sending...',
        successTitle: 'Message sent',
        successMessage: 'Thank you for your message! I will get back to you as soon as possible.',
        errorTitle: 'Error',
        errorMessage: 'An error occurred while sending your message. Please try again.'
      },
      quote: {
        title: 'Request a Quote',
        description: 'Fill out this form to get a personalized quote for your project',
        labels: {
          name: 'Name',
          email: 'Email',
          company: 'Company',
          phone: 'Phone',
          description: 'Project description'
        },
        placeholders: {
          name: 'Your name',
          email: 'your.email@example.com',
          company: 'Your company name (optional)',
          phone: 'Your phone number (optional)',
          description: 'Describe your project and needs...'
        },
        submit: 'Request Quote',
        successTitle: 'Request sent',
        successMessage: 'Thank you for your request! I will send you a personalized quote as soon as possible.',
        errorTitle: 'Error',
        errorMessage: 'An error occurred while sending your request. Please try again.'
      },
      directContact: {
        title: 'Direct Contact',
        description: 'Prefer to contact me directly? Here are my contact details:',
        email: 'Email',
        linkedin: 'LinkedIn',
        note: 'I am generally available Monday to Friday, 9 AM to 6 PM (CET).'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      links: {
        home: 'Home',
        portfolio: 'Portfolio',
        services: 'Services',
        cv: 'Resume',
        blog: 'Blog',
        contact: 'Contact'
      }
    },
    services: {
      title: 'Professional Services',
      subtitle: 'Tailored solutions to meet your development, audit, and training needs.',
      cta: 'Request a quote',
      services: {
        web: {
          title: 'Web Development',
          description: 'Development of modern and performant websites using the latest web technologies.',
          features: [
            'Showcase and e-commerce websites',
            'Progressive Web Applications (PWA)',
            'SEO and performance optimization',
            'Responsive and modern design'
          ]
        },
        technical: {
          title: 'Technical Audit',
          description: 'In-depth evaluation of your systems and infrastructure to optimize performance.',
          features: [
            'Technical architecture analysis',
            'Security audit',
            'Performance optimization',
            'Technical recommendations'
          ]
        },
        strategic: {
          title: 'Strategic Audit',
          description: 'Analysis of your digital strategy and recommendations for digital transformation.',
          features: [
            'Digital maturity analysis',
            'Competitive analysis',
            'Strategic recommendations',
            'Detailed action plan'
          ]
        },
        training: {
          title: 'AI Training',
          description: 'Customized training to master artificial intelligence and its applications.',
          features: [
            'Introduction to AI and machine learning',
            'Practical AI applications',
            'AI integration in your projects',
            'Personalized follow-up'
          ]
        }
      },
      contact: {
        title: 'Ready to start your project?',
        description: 'Contact me to discuss your needs and get a personalized quote.',
        button: 'Contact me'
      }
    },
    blog: {
      title: 'Blog',
      subtitle: 'Articles and thoughts on IoT, artificial intelligence, and emerging technologies.',
      newsletter: {
        title: 'Stay Updated',
        description: 'Subscribe to my newsletter to receive my latest articles and news.',
        button: 'Subscribe to newsletter'
      }
    }
  }
};