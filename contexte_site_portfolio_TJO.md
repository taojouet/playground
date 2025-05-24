# Contexte complet – Site Portfolio de Tao Jouet

## Présentation générale

Ce projet consiste à créer un site vitrine professionnel pour **Tao Jouet**, cadre dynamique dans les secteurs **IoT**, **tech**, **industrie**, avec des compétences solides en **gestion de projet**, **développement logiciel**, **intelligence artificielle**, **protocoles industriels** et **conseil stratégique**.

Ce site a pour objectif de servir de **vitrine personnelle**, **commerciale** et **technique**, et doit être **maintenable**, **responsive**, **rapide à charger**, **adapté au SEO**, et **facilement évolutif**.

---

## Objectifs du site

- Présenter le parcours professionnel, les compétences, et le CV de Tao Jouet
- Valoriser des projets techniques réalisés avec détails et liens externes
- Permettre à des recruteurs, partenaires ou prospects de le contacter
- Offrir un espace de blog pour le SEO et le partage de réflexions professionnelles
- Mettre en avant une offre de services professionnels
- Permettre de formaliser une demande de devis via un formulaire adapté

---

## Public cible

- Recruteurs tech ou industrie
- Responsables de projets techniques
- Décideurs innovation ou transformation digitale
- TPE/PME cherchant de la formation, un audit ou un développement
- Partenaires potentiels ou clients

---

## Architecture du site

Le site utilise **Next.js (Pages Router)**, **TailwindCSS**, **shadcn/ui**, déployé sur **Vercel**, sans backend (contenus statiques JSON/Markdown).

### Pages principales

#### `/` - Accueil
- Présentation rapide de Tao Jouet
- Phrase d'accroche percutante
- Courte biographie
- Boutons vers les autres sections
- Photo professionnelle
- Design avec framer-motion

#### `/portfolio`
- Liste de projets dynamiques (données via `projects.json`)
- Cartes avec titre, stack, résumé, lien GitHub ou démo
- Chaque projet peut être cliqué pour afficher un **détail sur la même page** (via modal ou collapse) :
  - Image(s), description complète, technologies, lien externe
  - Si le projet est déployé, afficher un pictogramme ouvrant la plateforme dans un nouvel onglet

#### `/cv`
- CV interactif structuré
- Sections : Compétences, Expériences, Formations, Certifications, Langues
- Bouton “Télécharger en PDF”

#### `/contact`
- Formulaire fonctionnel avec :
  - Prénom
  - Email
  - Message
- Envoi vers **contact@taojouet.com**
- Zone avec lien LinkedIn et mail cliquable

#### `/services`
- Détail des services proposés :
  - Création de sites web
  - Audit technique
  - Audit stratégique
  - Formation à l’intelligence artificielle
- Chaque service a une description dédiée

#### `/blog`
- Articles publiés pour :
  - SEO
  - Documentation des projets
  - Réflexions professionnelles

#### Formulaire de **demande de devis**
- Accessible depuis `/services` et `/contact`
- Champs :
  - Nom
  - Email
  - Entreprise (facultatif)
  - Téléphone (facultatif)
  - Description du besoin
- Bouton : “Demander un devis”
- Envoi également vers **contact@taojouet.com**

---

## Identité visuelle

- **Palette de couleurs** :
  - Bleu foncé : `#1E293B` → fond, titres
  - Gris clair : `#F1F5F9` → fonds secondaires
  - Bleu électrique : `#3B82F6` → boutons, liens
  - Orange moderne : `#FB923C` → accents, CTA
  - Texte principal : `#0F172A`
  - Texte secondaire : `#64748B`

- **Typographie** : Inter ou Manrope, sans serif

- **Style global** : Moderne, sobre, technique, inspiré de dashboards SaaS

---

## Fonctionnalités attendues

- Responsive design (mobile-first)
- Accessibilité (contraste, ARIA, lisibilité)
- SEO : balises `title`, `description`, `alt`, sitemap
- Animations légères (survol, apparition)
- Génération de sitemap et support multi-langue si possible
- Impression PDF propre pour le CV

---

## Résultat attendu

Le site doit refléter un profil professionnel rigoureux, polyvalent et orienté résultats. Il doit inspirer **confiance**, **valeur ajoutée**, **expertise**, et démontrer une **capacité à livrer des projets à fort enjeu** dans l'industrie et le numérique.

