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
      greeting: 'Salut, moi c\'est ',
      title: 'Expert IoT, Tech & Industrie',
      tagline: 'Passionné par l\'innovation, j\'adore créer des solutions tech avec des équipes motivées. Toujours partant pour de nouveaux défis !',
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
      featuredProjects: {
        title: 'Projets Récents',
        items: [
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
      }
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
      skills: {
        title: {
          fr: "Compétences Techniques",
          en: "Technical Skills"
        },
        programming: {
          fr: "Programmation",
          en: "Programming"
        },
        technologies: {
          fr: "Technologies",
          en: "Technologies"
        },
        tools: {
          fr: "Outils",
          en: "Tools"
        },
        management: {
          title: 'Gestion de Projet',
          items: [
            'Pilotage de projets IoT complexes',
            'Coordination d\'équipes techniques',
            'Gestion des délais et des ressources'
          ]
        },
        technical: {
          title: 'Expertise Technique',
          items: [
            'Protocoles industriels (KNX, Modbus, M-Bus, CAN, NMEA2000)',
            'Réseaux IoT (LoRaWAN, Sigfox, NB-IoT, LTE-M)',
            'Microservices (Node.js, Python)'
          ]
        },
        devops: {
          title: 'DevOps & Infrastructure',
          items: [
            'Pipelines CI/CD (Docker, Azure DevOps)',
            'Automatisation des déploiements',
            'Gestion de l\'infrastructure cloud'
          ]
        },
        business: {
          title: 'Business & Communication',
          items: [
            'Avant-vente technique',
            'Accompagnement commercial',
            'Formation et support technique'
          ]
        }
      },
      experience: {
        wiio: {
          title: 'Chef de projet & expert IoT (Alternance)',
          location: 'Aix-en-Provence',
          date: 'Depuis octobre 2024',
          responsibilities: [
            'Pilotage de projets IoT stratégiques pour des grands comptes du secteur industriel',
            'Conception et présentation de solutions techniques innovantes en avant-vente',
            'Coordination des déploiements terrain et suivi des équipes techniques',
            'Optimisation des processus de déploiement et de maintenance',
            'Formation et accompagnement des équipes clients sur les nouvelles solutions'
          ]
        },
        synox: {
          title: 'Chef de projet IoT / Développeur (Alternance)',
          location: 'Montpellier',
          date: 'Octobre 2020 à octobre 2024',
          responsibilities: [
            'Développement et maintenance de microservices critiques en Node.js',
            'Intégration de protocoles industriels et mise en place de réseaux LPWAN',
            'Mise en place et optimisation des pipelines CI/CD avec Docker et Azure DevOps',
            'Formation et accompagnement des équipes techniques',
            'Gestion de la documentation technique et des procédures de déploiement'
          ]
        },
        ies: {
          title: 'Stagiaire R&D',
          location: 'Montpellier',
          date: 'Mars à juillet 2020',
          responsibilities: [
            'Conception et développement d\'un espace immersif pour le projet HUT',
            'Intégration de solutions électroniques et développement d\'interfaces HMI',
            'Modélisation 3D et prototypage rapide',
            'Documentation technique et support utilisateur',
            'Tests et validation des fonctionnalités développées'
          ]
        }
      },
      education: [
        {
          degree: 'Mastère Spécialisé - Innovation, Transformation et Entrepreneuriat',
          institution: 'KEDGE Business School - Marseille, France',
          year: '2024 - 2025'
        },
        {
          degree: 'Master BAC+5 - Manager en Architecture Logicielle du SI',
          institution: 'CESI - Montpellier, France',
          year: '2022 - 2024'
        },
        {
          degree: 'Bachelor BAC+3 - Responsable en Ingénierie Logicielle',
          institution: 'CESI - Montpellier, France',
          year: '2021 - 2022'
        },
        {
          degree: 'Licence Pro - Systèmes Embarqués',
          institution: 'Pôle Formation UIMM Occitanie - Montpellier, France',
          year: '2020 - 2021'
        },
        {
          degree: 'DUT - GEII',
          institution: 'IUT Montpellier-Sète - Marseille, France',
          year: '2017 - 2020'
        },
        {
          degree: 'Bac Scientifique',
          institution: 'Lycée Jean Mermoz - Dakar, Sénégal',
          year: '2017'
        }
      ],
      certifications: {
        title: "Certifications",
        google: {
          title: "Google",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Google Digital Academy (Skillshop) : AI-Powered Shopping ads Certification (2025)",
            "Google Digital Academy : Google Analytics Certification (2025)"
          ]
        },
        semrush: {
          title: "Semrush",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Cours de SEO axé sur le contenu avec Brian Dean (2025)",
            "GA4 pour le SEO — Comment les données aident les entreprises à se développer avec Jeff Sauer (2025)",
            "Marketing de contenu avancé avec Brian Dean (2025)",
            "Principes de SEO : un guide essentiel pour les débutants (2025)"
          ]
        },
        hubspot: {
          title: "Hubspot",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Inbound Marketing Certification (2025)"
          ]
        },
        ademe: {
          title: "ADEME",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Low-Carbon Transition & Strategy Certificate (2025)"
          ]
        },
        sulitest: {
          title: "Sulitest",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Sustainability knowledge certificate (2025)"
          ]
        },
        anssi: {
          title: "ANSSI",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Cybersecurity Fundamentals (2023)"
          ]
        }
      },
      languages: {
        title: "Langues"
      }
    },
    contact: {
      pageTitle: 'Contact',
      pageDescription: 'Contactez Tao Jouet, Chef de projet & Expert IoT pour discuter de vos projets IoT et de développement logiciel.',
      title: 'Contact',
      subtitle: 'N\'hésitez pas à me contacter pour discuter de votre projet',
      form: {
        title: 'Formulaire de contact',
        description: 'Remplissez le formulaire ci-dessous pour me contacter directement',
        type: 'Type de demande',
        contact: 'Contact',
        quote: 'Demande de devis',
        name: 'Nom',
        email: 'Email',
        company: 'Entreprise',
        phone: 'Téléphone',
        subject: 'Sujet',
        message: 'Message',
        submit: 'Envoyer le message',
        requestQuote: 'Demander un devis',
        sending: 'Envoi en cours...',
        successTitle: 'Message envoyé',
        errorTitle: 'Erreur',
        typeLabel: 'Type de demande',
        selectTypePlaceholder: 'Sélectionnez le type',
        contactOption: 'Contact',
        quoteOption: 'Demande de devis',
        namePlaceholder: 'Votre nom',
        emailPlaceholder: 'Votre email',
        companyPlaceholder: 'Nom de votre entreprise (facultatif)',
        phonePlaceholder: 'Votre téléphone (facultatif)',
        subjectPlaceholder: 'Sujet',
        messagePlaceholder: 'Votre message'
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
      subtitle: 'Articles et réflexions sur l\'IoT, l\'intelligence artificielle, et les technologies émergentes.'
    },
    projects: {
      title: 'Projets',
      subtitle: 'Découvrez mes projets en IoT, développement web et solutions techniques innovantes.',
      backToProjects: 'Retour aux projets',
      technologies: 'Technologies utilisées'
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
      greeting: 'Hey, I\'m ',
      title: 'IoT, Tech & Industry Expert',
      tagline: 'Passionate about innovation, I love creating tech solutions with motivated teams. Always up for new challenges!',
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
      featuredProjects: {
        title: 'Recent Projects',
        items: [
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
      }
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
      skills: {
        title: {
          fr: "Compétences Techniques",
          en: "Technical Skills"
        },
        programming: {
          fr: "Programmation",
          en: "Programming"
        },
        technologies: {
          fr: "Technologies",
          en: "Technologies"
        },
        tools: {
          fr: "Outils",
          en: "Tools"
        },
        management: {
          title: 'Project Management',
          items: [
            'Key account IoT project management',
            'Technical pre-sales and commercial support',
            'Field deployment and technical coordination'
          ]
        },
        technical: {
          title: 'Technical Expertise',
          items: [
            'Industrial protocols (KNX, Modbus, M-Bus, CAN, NMEA2000)',
            'IoT networks (LoRaWAN, Sigfox, NB-IoT, LTE-M)',
            'Microservices (Node.js, Python)'
          ]
        },
        devops: {
          title: 'DevOps & Infrastructure',
          items: [
            'CI/CD pipelines (Docker, Azure DevOps)',
            'Automation of deployments',
            'Cloud infrastructure management'
          ]
        },
        business: {
          title: 'Business & Communication',
          items: [
            'Technical pre-sales',
            'Commercial support',
            'Technical training and support'
          ]
        }
      },
      experience: {
        wiio: {
          title: 'Project Manager & IoT Expert (Work-Study)',
          location: 'Aix-en-Provence, France',
          date: 'Since October 2024',
          responsibilities: [
            'Management of strategic IoT projects for key industrial accounts',
            'Design and presentation of innovative technical solutions in pre-sales',
            'Coordination of field deployments and technical team supervision',
            'Optimization of deployment and maintenance processes',
            'Training and support of client teams on new solutions'
          ]
        },
        synox: {
          title: 'IoT Project Manager / Developer (Work-Study)',
          location: 'Montpellier, France',
          date: 'October 2020 to October 2024',
          responsibilities: [
            'Development and maintenance of critical Node.js microservices',
            'Integration of industrial protocols and LPWAN network setup',
            'Implementation and optimization of CI/CD pipelines with Docker and Azure DevOps',
            'Technical team training and support',
            'Management of technical documentation and deployment procedures'
          ]
        },
        ies: {
          title: 'R&D Intern',
          location: 'Montpellier, France',
          date: 'March to July 2020',
          responsibilities: [
            'Design and development of an immersive space for the HUT project',
            'Integration of electronic solutions and HMI development',
            '3D modeling and rapid prototyping',
            'Technical documentation and user support',
            'Testing and validation of developed features'
          ]
        }
      },
      education: [
        {
          degree: 'Specialized Master\'s Degree - Innovation, Transformation and Entrepreneurship',
          institution: 'KEDGE Business School - Marseille, France',
          year: '2024 - 2025'
        },
        {
          degree: 'Master\'s Degree - Software Architecture Manager',
          institution: 'CESI - Montpellier, France',
          year: '2022 - 2024'
        },
        {
          degree: 'Bachelor\'s Degree - Software Engineering Manager',
          institution: 'CESI - Montpellier, France',
          year: '2021 - 2022'
        },
        {
          degree: 'Professional License - Embedded Systems',
          institution: 'Pôle Formation UIMM Occitanie - Montpellier, France',
          year: '2020 - 2021'
        },
        {
          degree: 'Technical Degree - Electrical Engineering & Industrial Computing',
          institution: 'IUT Montpellier-Sète - Marseille, France - Montpellier, France',
          year: '2017 - 2020'
        },
        {
          degree: 'Scientific Baccalaureate',
          institution: 'Lycée Jean Mermoz - Dakar, Senegal',
          year: '2017'
        }
      ],
      certifications: {
        title: "Certifications",
        google: {
          title: "Google",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Google Digital Academy (Skillshop) : AI-Powered Shopping ads Certification (2025)",
            "Google Digital Academy : Google Analytics Certification (2025)"
          ]
        },
        semrush: {
          title: "Semrush",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Content-focused SEO course with Brian Dean (2025)",
            "GA4 for SEO — How data helps businesses grow with Jeff Sauer (2025)",
            "Advanced Content Marketing with Brian Dean (2025)",
            "SEO Principles: An essential guide for beginners (2025)"
          ]
        },
        hubspot: {
          title: "Hubspot",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Inbound Marketing Certification (2025)"
          ]
        },
        ademe: {
          title: "ADEME",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Low-Carbon Transition & Strategy Certificate (2025)"
          ]
        },
        sulitest: {
          title: "Sulitest",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Sustainability knowledge certificate (2025)"
          ]
        },
        anssi: {
          title: "ANSSI",
          color: "bg-[#1E293B]/5 text-[#1E293B] border-[#1E293B]/10",
          items: [
            "Cybersecurity Fundamentals (2023)"
          ]
        }
      },
      languages: {
        title: "Languages"
      }
    },
    contact: {
      pageTitle: 'Contact',
      pageDescription: 'Contact Tao Jouet, Project Manager & IoT Expert to discuss your IoT and software development projects.',
      title: 'Contact',
      subtitle: 'Feel free to contact me to discuss your project',
      form: {
        title: 'Contact Form',
        description: 'Fill out the form below to contact me directly',
        type: 'Request type',
        contact: 'Contact',
        quote: 'Quote request',
        name: 'Name',
        email: 'Email',
        company: 'Company',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send message',
        requestQuote: 'Request a quote',
        sending: 'Sending...',
        successTitle: 'Message sent',
        errorTitle: 'Error',
        typeLabel: 'Request type',
        selectTypePlaceholder: 'Select type',
        contactOption: 'Contact',
        quoteOption: 'Quote request',
        namePlaceholder: 'Your name',
        emailPlaceholder: 'Your email',
        companyPlaceholder: 'Your company name (optional)',
        phonePlaceholder: 'Your phone (optional)',
        subjectPlaceholder: 'Subject',
        messagePlaceholder: 'Your message'
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
      subtitle: 'Articles and thoughts on IoT, artificial intelligence, and emerging technologies.'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Discover my projects in IoT, web development and innovative technical solutions.',
      backToProjects: 'Back to projects',
      technologies: 'Technologies used'
    }
  }
};