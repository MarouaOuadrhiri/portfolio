import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, ArrowLeft, ArrowUp, Download, Menu, X, Plus, Minus, Folder, Code2, Database, Users, Monitor, Layers, Mail, Check, Copy, ExternalLink, Github, ChevronRight, GraduationCap, Briefcase, Globe, LayoutTemplate, Sparkles, Search, Bell } from 'lucide-react';
import './styles.css';

// Start each page load at the hero instead of restoring an old section.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
window.history.replaceState(window.history.state, '', window.location.pathname + window.location.search + '#accueil');
window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

const ASSET_BASE = import.meta.env.BASE_URL + 'assets/';
const email = 'ouadrhirimaroua@gmail.com';
const technologies = [ ['A', 'Angular', 'angular'], ['⚛', 'React', 'react'], ['◒', 'Spring Boot', 'spring'], ['dj', 'Django', 'django'], ['◇', 'Laravel', 'laravel'], ['⌁', 'MySQL', 'mysql'] ];
const groups = [
  {
    "id": "saas",
    "label": "SaaS",
    "icon": Layers,
    "projects": [
      {
        "id": "confirmation-cmd",
        "name": "Confirmation CMD",
        "url": "https://confirmation-cmd.vercel.app/",
        "kind": "SaaS · Application web",
        "description": "Découvrez Confirmation CMD dans sa version en ligne.",
        "tags": ["Node.js", "Express.js", "MySQL"],
        "preview": "dashboard",
        "details": "Application accessible directement dans la prévisualisation intégrée.",
        "contributions": ["Version en ligne accessible dans la prévisualisation intégrée."],
        "technologies": ["Node.js", "Express.js", "MySQL"],
        "objective": "Découvrez Confirmation CMD dans sa version en ligne.",
        "highlights": ["Application web", "Prévisualisation interactive"]
      },
      {
        "id": "brandshift",
        "name": "BrandShift",
        "url": "https://brand-shift.vercel.app/",
        "kind": "SaaS · Application web",
        "description": "Centraliser les projets, les équipes et les tâches dans un espace de travail commun.",
        "tags": [
          "Angular",
          "Django",
          "NoSQL"
        ],
        "preview": "dashboard",
        "details": "Une plateforme SaaS à explorer directement dans la fenêtre de prévisualisation.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "Angular",
          "Django",
          "NoSQL"
        ],
        "objective": "Centraliser les projets, les équipes et les tâches dans un espace de travail commun.",
        "highlights": [
          "Organisation des projets",
          "Suivi des tâches",
          "Vue d’ensemble du travail"
        ]
      },
      {
        "id": "frameflow",
        "name": "FrameFlow",
        "url": "https://frameflow-saas-v7.vercel.app/",
        "kind": "SaaS · Production",
        "description": "Présenter un centre de contrôle pour suivre et organiser les activités de production.",
        "tags": [
          "Next.js",
          "Node.js",
          "MySQL"
        ],
        "preview": "dashboard",
        "details": "Un centre de contrôle de production, présenté dans sa version en ligne.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "Next.js",
          "Node.js",
          "MySQL"
        ],
        "objective": "Présenter un centre de contrôle pour suivre et organiser les activités de production.",
        "highlights": [
          "Pilotage de production",
          "Interface de suivi",
          "Organisation du travail"
        ]
      }
    ]
  },
  {
    "id": "websites",
    "label": "Websites",
    "icon": Globe,
    "projects": [
      {
        "id": "skintherapie",
        "name": "SkinTherapie",
        "url": "https://skintherapie.vercel.app/",
        "kind": "Website · Santé & soins",
        "description": "Présenter les prestations de kinésithérapie et de soins médico-esthétiques, et faciliter la découverte du centre.",
        "tags": [
          "React",
          "Site web"
        ],
        "preview": "services",
        "details": "Un site consacré à la kinésithérapie et aux soins médico-esthétiques.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter les prestations de kinésithérapie et de soins médico-esthétiques, et faciliter la découverte du centre.",
        "highlights": [
          "Présentation du centre",
          "Découverte des soins",
          "Parcours de prise de contact"
        ]
      },
      {
        "id": "multishift",
        "name": "MultiShift Studio",
        "url": "https://multishift.vercel.app/",
        "kind": "Website · Architecture",
        "description": "Mettre en valeur un studio d’architecture d’intérieur et de visualisation 3D à travers son univers et ses prestations.",
        "tags": [
          "React",
          "Site web"
        ],
        "preview": "services",
        "details": "Un site de studio d’architecture d’intérieur et de visualisation 3D.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Mettre en valeur un studio d’architecture d’intérieur et de visualisation 3D à travers son univers et ses prestations.",
        "highlights": [
          "Présentation du studio",
          "Architecture d’intérieur",
          "Visualisation 3D"
        ]
      }
    ]
  },
  {
    "id": "landing",
    "label": "Landing Pages",
    "icon": LayoutTemplate,
    "projects": [
      {
        "id": "pack-routine-anua",
        "name": "Routine Anua",
        "url": "https://pack-routine-anua.vercel.app/",
        "kind": "Landing page · Vinillia",
        "description": "Présenter Routine Anua dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "brand": "Vinillia",
        "tags": [
          "Vinillia",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vinillia : Routine Anua. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Routine Anua dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "pack-retinol-glow",
        "name": "Retinol Glow",
        "url": "https://pack-retinol-glow.vercel.app/",
        "kind": "Landing page · Vinillia",
        "description": "Présenter Retinol Glow dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "brand": "Vinillia",
        "tags": [
          "Vinillia",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vinillia : Retinol Glow. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Retinol Glow dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "pack-retinol-relief",
        "name": "Retinol & Relief",
        "url": "https://pack-retinol-relief.vercel.app/",
        "kind": "Landing page · Vinillia",
        "description": "Présenter Retinol & Relief dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "brand": "Vinillia",
        "tags": [
          "Vinillia",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vinillia : Retinol & Relief. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Retinol & Relief dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "capiboost",
        "name": "Capiboost",
        "url": "https://capiboost.vercel.app/",
        "kind": "Landing page · Vinillia",
        "description": "Présenter Capiboost dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "brand": "Vinillia",
        "tags": [
          "Vinillia",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vinillia : Capiboost. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Capiboost dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "shampoo-caffeine",
        "name": "Shampooing Caféine",
        "url": "https://shampoo-caffeine.vercel.app/",
        "kind": "Landing page · Vinillia",
        "description": "Présenter Shampooing Caféine dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "brand": "Vinillia",
        "tags": [
          "Vinillia",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vinillia : Shampooing Caféine. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Shampooing Caféine dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "kc-rouge-omega",
        "name": "Keratin Care — Rouge Omega",
        "url": "https://kc-rouge-omega.vercel.app/",
        "kind": "Landing page · Vinillia",
        "description": "Présenter Keratin Care — Rouge Omega dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "brand": "Vinillia",
        "tags": [
          "Vinillia",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vinillia : Keratin Care — Rouge Omega. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Keratin Care — Rouge Omega dans l’univers Vinillia et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "sos-therapy",
        "name": "SOS Hair Therapy",
        "url": "https://sos-therapy.vercel.app/",
        "kind": "Landing page · Vitasilk",
        "description": "Présenter SOS Hair Therapy dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "brand": "Vitasilk",
        "tags": [
          "Vitasilk",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vitasilk : SOS Hair Therapy. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter SOS Hair Therapy dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "sos-rosefonce",
        "name": "SOS — Rose foncé",
        "url": "https://sos-rosefonce.vercel.app/",
        "kind": "Landing page · Vitasilk",
        "description": "Présenter SOS — Rose foncé dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "brand": "Vitasilk",
        "tags": [
          "Vitasilk",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vitasilk : SOS — Rose foncé. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter SOS — Rose foncé dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "sos-gold-brown",
        "name": "SOS — Gold Brown",
        "url": "https://sos-gold-brown.vercel.app/",
        "kind": "Landing page · Vitasilk",
        "description": "Présenter SOS — Gold Brown dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "brand": "Vitasilk",
        "tags": [
          "Vitasilk",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vitasilk : SOS — Gold Brown. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter SOS — Gold Brown dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "crystal-rose-seven",
        "name": "Crystal Rose",
        "url": "https://crystal-rose-seven.vercel.app/",
        "kind": "Landing page · Vitasilk",
        "description": "Présenter Crystal Rose dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "brand": "Vitasilk",
        "tags": [
          "Vitasilk",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vitasilk : Crystal Rose. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Crystal Rose dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "crystal-mauve-henna",
        "name": "Crystal Mauve Henna",
        "url": "https://crystal-mauve-henna.vercel.app/",
        "kind": "Landing page · Vitasilk",
        "description": "Présenter Crystal Mauve Henna dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "brand": "Vitasilk",
        "tags": [
          "Vitasilk",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vitasilk : Crystal Mauve Henna. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Crystal Mauve Henna dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "vitasilk-eight",
        "name": "Rituel capillaire",
        "url": "https://vitasilk-eight.vercel.app/",
        "kind": "Landing page · Vitasilk",
        "description": "Présenter Rituel capillaire dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "brand": "Vitasilk",
        "tags": [
          "Vitasilk",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Vitasilk : Rituel capillaire. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Présenter Rituel capillaire dans l’univers Vitasilk et accompagner la découverte de l’offre.",
        "highlights": [
          "Présentation de l’offre",
          "Contenu produit",
          "Parcours de découverte"
        ]
      },
      {
        "id": "marjad-tableaux-hexagonaux",
        "name": "Tableaux hexagonaux",
        "url": "https://marjad-tableaux-hexagonaux.vercel.app/",
        "kind": "Landing page · Marjad",
        "description": "Mettre en valeur tableaux hexagonaux et guider la découverte du produit à travers une page dédiée.",
        "brand": "Marjad",
        "tags": [
          "Marjad",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Marjad : Tableaux hexagonaux. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Mettre en valeur tableaux hexagonaux et guider la découverte du produit à travers une page dédiée.",
        "highlights": [
          "Mise en scène du produit",
          "Détails de la collection",
          "Parcours de découverte"
        ]
      },
      {
        "id": "marjad-trio-calligraphie-rond",
        "name": "Trio calligraphie rond",
        "url": "https://marjad-trio-calligraphie-rond.vercel.app/",
        "kind": "Landing page · Marjad",
        "description": "Mettre en valeur trio calligraphie rond et guider la découverte du produit à travers une page dédiée.",
        "brand": "Marjad",
        "tags": [
          "Marjad",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Marjad : Trio calligraphie rond. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Mettre en valeur trio calligraphie rond et guider la découverte du produit à travers une page dédiée.",
        "highlights": [
          "Mise en scène du produit",
          "Détails de la collection",
          "Parcours de découverte"
        ]
      },
      {
        "id": "marjad-trio-ya-allah-ya-rahman-ya-r",
        "name": "Trio Ya Allah · Ya Rahman",
        "url": "https://marjad-trio-ya-allah-ya-rahman-ya-r.vercel.app/",
        "kind": "Landing page · Marjad",
        "description": "Mettre en valeur trio ya allah · ya rahman et guider la découverte du produit à travers une page dédiée.",
        "brand": "Marjad",
        "tags": [
          "Marjad",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Marjad : Trio Ya Allah · Ya Rahman. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Mettre en valeur trio ya allah · ya rahman et guider la découverte du produit à travers une page dédiée.",
        "highlights": [
          "Mise en scène du produit",
          "Détails de la collection",
          "Parcours de découverte"
        ]
      },
      {
        "id": "marjad-panneau-calligraphie-lumineu",
        "name": "Panneau calligraphie lumineux",
        "url": "https://marjad-panneau-calligraphie-lumineu.vercel.app/",
        "kind": "Landing page · Marjad",
        "description": "Mettre en valeur panneau calligraphie lumineux et guider la découverte du produit à travers une page dédiée.",
        "brand": "Marjad",
        "tags": [
          "Marjad",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Marjad : Panneau calligraphie lumineux. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Mettre en valeur panneau calligraphie lumineux et guider la découverte du produit à travers une page dédiée.",
        "highlights": [
          "Mise en scène du produit",
          "Détails de la collection",
          "Parcours de découverte"
        ]
      },
      {
        "id": "marjad-miroir-soleil",
        "name": "Miroir Soleil",
        "url": "https://marjad-miroir-soleil.vercel.app/",
        "kind": "Landing page · Marjad",
        "description": "Mettre en valeur miroir soleil et guider la découverte du produit à travers une page dédiée.",
        "brand": "Marjad",
        "tags": [
          "Marjad",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Marjad : Miroir Soleil. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Mettre en valeur miroir soleil et guider la découverte du produit à travers une page dédiée.",
        "highlights": [
          "Mise en scène du produit",
          "Détails de la collection",
          "Parcours de découverte"
        ]
      },
      {
        "id": "marjad-collection-allah-ar-rahman-a",
        "name": "Collection Allah · Ar-Rahman",
        "url": "https://marjad-collection-allah-ar-rahman-a.vercel.app/",
        "kind": "Landing page · Marjad",
        "description": "Mettre en valeur collection allah · ar-rahman et guider la découverte du produit à travers une page dédiée.",
        "brand": "Marjad",
        "tags": [
          "Marjad",
          "React"
        ],
        "preview": "services",
        "details": "Une landing page Marjad : Collection Allah · Ar-Rahman. Explorez la page complète dans le navigateur intégré.",
        "contributions": [
          "Version en ligne accessible dans la prévisualisation intégrée."
        ],
        "technologies": [
          "React"
        ],
        "objective": "Mettre en valeur collection allah · ar-rahman et guider la découverte du produit à travers une page dédiée.",
        "highlights": [
          "Mise en scène du produit",
          "Détails de la collection",
          "Parcours de découverte"
        ]
      }
    ]
  }
];
const experience = [
  { title: 'Développeuse Full Stack', org: 'BrandShiiift', date: 'Mars — Octobre 2026', year: '2026', description: 'Contribution à BrandShift, une plateforme SaaS de gestion de projets et d’équipes.', points: ['Développement des interfaces et des tableaux de bord', 'Contribution au back-end et à la base de données', 'Suivi des tâches et collaboration en équipe'], tags: ['Angular', 'Django', 'MongoDB'], project: 'brandshift' },
  { title: 'Développement web · WordPress', org: 'YONETWORK', date: 'Octobre — Décembre 2024', year: '2024', description: 'Développement de sites et d’applications à partir de templates WordPress.', points: ['Boutique de vêtements traditionnels marocains : Opale', 'Site de déménagement et de VTC', 'Application de gestion : syndrome.ma'], tags: ['WordPress', 'E-commerce'], project: 'opale' },
  { title: 'Dashboard pharmacie', org: 'Wehelp', date: 'Mars — Avril 2024', year: '2024', description: 'Développement d’un tableau de bord pour une application mobile de pharmacie.', points: ['Interfaces d’administration avec React et Bootstrap', 'API et base de données avec Laravel', 'Initiation à Spring Boot et Angular pour un CRM interne'], tags: ['React', 'Laravel', 'Bootstrap'], project: 'pharmacie' }
];
const education = [
  { title: 'Développement web & mobile', org: 'JobInTech', date: 'Octobre 2025 — Mars 2026', year: '2025–2026', description: 'Formation intensive axée sur les technologies front-end et back-end modernes.', points: ['Développement d’applications web et mobiles', 'Pratique de Java, Spring Boot et Angular', 'Programmation Python et bases de données MySQL'], tags: ['Java', 'Spring Boot', 'Angular', 'Python', 'MySQL'] },
  { title: 'Développement Digital', org: 'ISTAG BAB TIZIMI', date: '2022 — 2024', year: '2022–2024', description: 'Diplôme en Développement Digital — Option Web Full Stack.', points: ['Fondamentaux du développement front-end et back-end', 'Conception et gestion de bases de données', 'Développement d’applications web'], tags: ['Web Full Stack', 'Diplôme'] },
  { title: 'Baccalauréat', org: 'Sciences physiques', date: '2021 — 2022', year: '2021–2022', description: 'Baccalauréat en sciences physiques.', points: [], tags: ['Sciences physiques'] }
];

function Icon({ icon: Component, ...props }) { return <Component size={19} strokeWidth={1.6} aria-hidden="true" {...props} />; }
function Eyebrow({ children, light = false }) { return <p className={`eyebrow ${light ? 'light' : ''}`}><span />{children}</p>; }
function Tags({ items }) { return <div className="tags">{items.map(t => <span key={t}>{t}</span>)}</div>; }
function CvLink({ className = '' }) { return <a className={`button button-outline ${className}`} href={ASSET_BASE+"Maroua-Ouadrhiri-CV.pdf"} download><Icon icon={Download} />Télécharger mon CV</a>; }

function DashboardPreview({ pharmacy = false, compact = false }) {
  const gradientId = React.useId();
  return <div className={`dashboard browser-frame ${pharmacy ? 'pharmacy' : ''} ${compact ? 'compact' : ''}`} role="img" aria-label={`Aperçu illustratif du tableau de bord ${pharmacy ? 'Pharmacie' : 'BrandShift'}`}>
    <div className="browser-bar"><i /><i /><i /><span>{pharmacy ? 'pharmacie / administration' : 'brandshift / workspace'}</span></div>
    <div className="dashboard-body"><aside className="dash-sidebar"><strong><span className="app-symbol">{pharmacy ? '+' : 'B'}</span>{pharmacy ? 'Pharmacie' : 'BrandShift'}</strong>{['Tableau de bord', pharmacy ? 'Produits' : 'Projets', 'Tâches', 'Équipe', 'Paramètres'].map((x,i)=><div key={x} className={i===0 ? 'selected' : ''}><span>{['▦','▱','☑','♧','⚙'][i]}</span>{x}</div>)}<small>Votre espace de travail</small></aside>
    <div className="dash-content"><div className="dash-toolbar"><span><Search size={11} />Rechercher...</span><Bell size={12} /><b>M</b></div><div className="dash-greeting"><strong>{pharmacy ? 'Gestion de la pharmacie' : 'Bonjour, Maroua !'}</strong><small>Voici un aperçu de votre espace.</small></div><div className="dash-stats">{(pharmacy ? ['Produits','Commandes','Clients'] : ['Projets','Tâches','Équipe']).map((s,i)=><div key={s}><span className={`stat-icon s${i}`}><Icon icon={[Folder,Layers,Users][i]} size={14}/></span><small>{s}</small><b>{[8,24,5][i]}</b></div>)}</div><div className="dash-charts"><div className="line-chart"><strong>{pharmacy ? 'Activité de la pharmacie' : 'Avancement des projets'}</strong><div className="chart-lines"><svg viewBox="0 0 300 100" preserveAspectRatio="none"><defs><linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor={pharmacy ? '#359677' : '#7585d8'} stopOpacity=".3"/><stop offset="1" stopColor="#fff" stopOpacity="0"/></linearGradient></defs><path d="M0 80 Q25 88 45 60 T90 63 T140 42 T190 48 T240 22 T300 9 L300 100 L0 100Z" fill={`url(#${gradientId})`}/><path d="M0 80 Q25 88 45 60 T90 63 T140 42 T190 48 T240 22 T300 9" fill="none" stroke={pharmacy ? '#359677' : '#7585d8'} strokeWidth="2.5"/></svg></div><div className="chart-months"><span>Jan</span><span>Fév</span><span>Mar</span><span>Avr</span><span>Mai</span></div></div><div className="donut-chart"><strong>Répartition</strong><div className="donut"/><div className="legend"><i/> En cours <i/> Terminé</div></div></div><div className="dash-table"><strong>{pharmacy ? 'Dernières commandes' : 'Projets récents'}</strong>{['Refonte de la plateforme','Application mobile','Dashboard client'].map((s,i)=><div key={s}><i className={`s${i}`}/><span>{pharmacy ? ['Commande #024','Commande #023','Commande #022'][i] : s}</span><em>{['En cours','À faire','Terminé'][i]}</em><span className="mini-avatar">{['M','Y','A'][i]}</span></div>)}</div></div></div></div>;
}

function EditorialPreview({ type }) {
  const fashion = type === 'fashion', architecture = type === 'architecture';
  return <div className={`editorial-preview browser-frame ${type}`} role="img" aria-label="Aperçu illustratif du projet"><div className="browser-bar"><i/><i/><i/><span>{fashion ? 'opale / collection' : architecture ? 'studio / architecture' : 'mobilité / services'}</span></div><div className="editorial-nav"><strong>{fashion ? 'Opale' : architecture ? 'Atelier.' : 'En route.'}</strong><span>Accueil &nbsp; Collection &nbsp; À propos</span><span>↗</span></div><div className="editorial-body"><div><small>{fashion ? 'HÉRITAGE & MODERNITÉ' : architecture ? 'ARCHITECTURE & INTÉRIEURS' : 'DÉMÉNAGEMENT & VTC'}</small><h3>{fashion ? <>L’artisanat<br/>marocain,<br/><em>au féminin.</em></> : architecture ? <>Des espaces<br/>qui ont<br/><em>du sens.</em></> : <>Un nouveau<br/>départ,<br/><em>en toute sérénité.</em></>}</h3><p>{fashion ? 'Des pièces qui racontent une histoire.' : architecture ? 'Des lieux à vivre, pensés pour vous.' : 'Des services pensés pour vous simplifier la vie.'}</p><span className="preview-cta">{fashion ? 'Découvrir la collection' : architecture ? 'Découvrir le studio' : 'Nos services'} ↗</span></div><div className="editorial-art" aria-hidden="true">{fashion ? <><div className="fashion-arch"/><div className="fabric"><span/><span/><span/></div><div className="art-caption">COLLECTION<br/>ESSENTIELLE</div></> : architecture ? <><div className="building"><i/><i/><i/><i/></div><div className="arch-sun"/><div className="plant"/></> : <><div className="service-circle"/><div className="service-box box-one"/><div className="service-box box-two"/><span className="route">↗</span></>}</div></div><div className="editorial-footer"><span>{fashion ? 'Savoir-faire marocain' : architecture ? 'Simplicité. Matière. Lumière.' : 'À vos côtés, à chaque étape.'}</span><span>01 — 03</span></div></div>;
}
function ProjectPreview({ project, compact = false }) { return project.preview === 'dashboard' || project.preview === 'pharmacy' ? <DashboardPreview pharmacy={project.preview === 'pharmacy'} compact={compact}/> : <EditorialPreview type={project.preview}/>; }

function ProjectDialog({ project, close }) {
  const dialogRef = useRef(null);
  useEffect(()=>{const dialog=dialogRef.current; dialog.showModal(); document.body.style.overflow='hidden'; return ()=>{document.body.style.overflow='';};},[]);
  return <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onCancel={close} onClick={e=>{if(e.target===e.currentTarget)close();}}><button className="round-button modal-close" onClick={close} aria-label="Fermer les détails"><Icon icon={X}/></button><Eyebrow>{project.kind}</Eyebrow><h2 id="project-dialog-title">{project.name}</h2><p>{project.details}</p><Tags items={project.tags}/><div className="modal-preview"><ProjectPreview project={project}/></div><small className="preview-note">Aperçu illustratif · ne représente pas une capture du produit réel.</small><h3>{project.concept ? 'Intentions de design' : 'Mes contributions'}</h3><ul>{project.contributions.map(x=><li key={x}>{x}</li>)}</ul>{project.url ? <a className="button" href={project.url} target="_blank" rel="noreferrer">Visiter le site <Icon icon={ExternalLink}/></a> : <a className="button" href="#contact" onClick={close}>Échanger sur ce projet <Icon icon={ArrowUpRight}/></a>}</dialog>;
}


function ProjectBrowser({project}){
 const [reload,setReload]=useState(0);
 return <div className="project-browser"><div className="project-browser-toolbar"><span className="browser-traffic" aria-hidden="true"><i/><i/><i/></span><button onClick={()=>setReload(v=>v+1)} aria-label="Recharger la prévisualisation" title="Recharger">↻</button><span className="project-address"><Globe size={12}/>{project.url?new URL(project.url).hostname:project.name+' / aperçu illustratif'}</span>{project.url&&<a href={project.url} target="_blank" rel="noreferrer" aria-label={'Ouvrir '+project.name+' dans un nouvel onglet'}><ExternalLink size={14}/></a>}</div>
 {project.url?<iframe key={project.id+reload} className="project-live-frame" src={project.url} title={'Site '+project.name+' — prévisualisation interactive'} loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms allow-popups"/>:<div className="project-local-scroll" tabIndex="0" aria-label={'Aperçu défilant de '+project.name} key={project.id+reload}><ProjectPreview project={project}/><div className="project-local-details"><span className="local-preview-badge">Aperçu illustratif · {project.concept?'concept personnel':'lien de démonstration à ajouter'}</span><h4>{project.name}</h4><p>{project.details}</p><h5>{project.concept?'Intentions du concept':'Mes contributions'}</h5>{project.contributions.map((text,i)=><div className="local-contribution" key={text}><span>0{i+1}</span><p>{text}</p><Check size={17}/></div>)}<div className="local-preview-end"><Code2 size={22}/><p>{project.url?'': 'Cette vue présente le projet ; elle ne remplace pas une démonstration du produit réel.'}</p><Tags items={project.tags}/></div></div></div>}
 <div className="project-browser-status"><span>↕ Faites défiler à l’intérieur</span><small>{project.url?'Site externe · affichage selon disponibilité':'Aperçu illustratif'}</small></div></div>;
}

function Projects({ selected, setSelected }) {
 const [groupId,setGroupId]=useState('saas');const [brand,setBrand]=useState('all');
 const listRef=useRef(null);
 const group=groups.find(g=>g.id===groupId);
 const projects=group.projects.filter(p=>groupId!=='landing'||brand==='all'||p.brand===brand);
 const project=projects[selected]||projects[0];const current=Math.max(0,projects.findIndex(p=>p.id===project.id));
 const count=n=>String(n).padStart(2,'0');
 const changeGroup=id=>{setGroupId(id);setBrand('all');setSelected(0);};
 const move=direction=>setSelected((current+direction+projects.length)%projects.length);
 useEffect(()=>{const list=listRef.current;const el=list?.querySelector('[aria-current="true"]');if(el&&list){const top=el.offsetTop-list.offsetTop;if(top<list.scrollTop||top+el.offsetHeight>list.scrollTop+list.clientHeight)list.scrollTo({top:Math.max(0,top-20),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}},[current,groupId,brand]);
 return <section id="projets" className="project-gallery" aria-labelledby="gallery-title"><div className="gallery-container"><header className="gallery-heading"><div><Eyebrow>Selected work / Mes réalisations</Eyebrow><h2 id="gallery-title">Des projets à vivre.<br/><em>Pas seulement à regarder.</em></h2></div><p>Choisissez un projet dans l’explorateur.<br/>Découvrez son objectif, ses technologies et sa version en ligne.</p></header>
 <div className="work-explorer dossier-explorer"><div className="work-explorer-top"><span><span className="work-live-dot"/>miwa / work explorer</span><small>22 projets · 3 univers</small></div><div className="work-explorer-layout">
 <aside className="work-sidebar" aria-label="Explorateur de projets"><div className="dossier-brand"><span>miwa</span><small>Selected projects / Full Stack</small></div><div className="work-sidebar-title"><Folder size={16}/><span>Collections</span></div><nav className="work-collections" aria-label="Catégories de projets">{groups.map(g=><button key={g.id} aria-pressed={groupId===g.id} onClick={()=>changeGroup(g.id)}><Icon icon={g.icon} size={18}/><span>{g.label}</span><small>{count(g.projects.length)}</small><ChevronRight size={14}/></button>)}</nav>
 {groupId==='landing'&&<div className="work-brand-select"><label htmlFor="work-brand">Marque</label><select id="work-brand" value={brand} onChange={e=>{setBrand(e.target.value);setSelected(0);}}><option value="all">Toutes les marques · 18</option>{['Vinillia','Vitasilk','Marjad'].map(name=><option key={name} value={name}>{name} · 6</option>)}</select></div>}
 <div className="work-project-list-label"><span>{brand==='all'?group.label:brand}</span><span>{count(projects.length)}</span></div><div className="work-project-list" ref={listRef}>{projects.map((p,i)=><button key={p.id} aria-current={p.id===project.id?'true':undefined} onClick={()=>setSelected(i)}><span className="work-file-number">{count(i+1)}</span><span><strong>{p.name}</strong><small>{p.brand||new URL(p.url).hostname}</small></span>{p.id===project.id&&<span className="work-selected-dot"/>}</button>)}</div><span className="work-sidebar-foot">Sélectionnez un projet pour l’explorer.</span></aside>
 <div className="work-canvas"><div className="work-project-toolbar"><span className="dossier-preview-label"><span className="work-live-dot"/>Aperçu en direct</span><div className="gallery-arrows"><button onClick={()=>move(-1)} aria-label="Projet précédent"><ArrowLeft size={17}/></button><span aria-live="polite">{count(current+1)} <small>/ {count(projects.length)}</small></span><button onClick={()=>move(1)} aria-label="Projet suivant"><ArrowRight size={17}/></button></div></div><div className="gallery-browser-stage work-preview" key={project.id}><ProjectBrowser project={project}/></div></div>
 <aside className="work-project-facts dossier-info" key={'facts-'+project.id} aria-label={'Fiche du projet '+project.name}><header className="dossier-info-heading"><span className="work-fact-label">Le projet / {count(current+1)}</span><h3>{project.name}</h3><p>{project.brand?project.brand+' / ':''}{group.label}</p></header><div className="work-objective"><h4>Objectif</h4><p>{project.objective}</p></div><div className="work-tech"><h4>Technologies</h4><div className="work-tech-list">{project.technologies.map(tech=><span key={tech}>{tech}</span>)}</div></div><div className="dossier-highlights"><h4>À découvrir</h4><ul>{project.highlights.map(text=><li key={text}><Check size={13}/>{text}</li>)}</ul></div><dl className="work-project-meta"><div><dt>Format</dt><dd>{group.label}</dd></div>{project.brand&&<div><dt>Marque</dt><dd>{project.brand}</dd></div>}</dl><a className="dossier-visit" href={project.url} target="_blank" rel="noreferrer">Visiter le site <ExternalLink size={16}/></a><span className="dossier-url">{new URL(project.url).hostname}</span></aside>
 </div></div></div></section>;
}

const milestones = [
  {year:'2022',type:'Formation',title:'Baccalauréat',org:'Sciences physiques & chimie',date:'2022',icon:GraduationCap},
  {year:'2024',type:'Formation',title:'DTS Développement Digital',org:'Option Web Full Stack',date:'2024',icon:GraduationCap},
  {year:'2024',type:'Stage',title:'Stage professionnel',org:'Webhelp',date:'2024 · 1 mois',icon:Briefcase},
  {year:'2024',type:'Stage',title:'Stage professionnel',org:'Iteczone',date:'2024 · 1 mois',icon:Briefcase},
  {year:'2025',type:'Expérience',title:'Expérience professionnelle',org:'YONETWORK',date:'01 février — 30 août 2025',icon:Briefcase},
  {year:'2025–26',type:'Formation',title:'Formation JobInTech',org:'JobInTech',date:'01 octobre 2025 — 30 mai 2026',icon:GraduationCap},
  {year:'2026',type:'Expérience',title:'Expérience professionnelle',org:'Mediast',date:'01 juin — 31 octobre 2026',icon:Briefcase}
];
const journeyChapters = [
  {id:'formation',label:'Formation',title:'Apprendre pour construire.',intro:'Un socle scientifique, une spécialisation Full Stack et une formation intensive pour relier la théorie à la pratique.',icon:GraduationCap,tag:'LES FONDATIONS',count:'03',unit:'étapes de formation',tone:'sage',items:milestones.filter(item=>item.type==='Formation')},
  {id:'experience',label:'Expérience',title:'Grandir sur le terrain.',intro:'Des stages aux expériences professionnelles : un parcours fait de rencontres, de pratique et de projets.',icon:Briefcase,tag:'LA MISE EN PRATIQUE',count:'04',unit:'expériences & stages',tone:'forest',items:milestones.filter(item=>item.type!=='Formation')},
  {id:'dev',label:'Du besoin au code',title:'Penser. Construire. Affiner.',intro:'Ma boussole de développeuse : comprendre l’usage avant de coder, relier les différentes couches et améliorer le résultat par itérations.',icon:Code2,tag:'LE DEV MINDSET',count:'</>',unit:'une idée, plusieurs connexions',tone:'cream',items:[{year:'01',title:'Comprendre avant de coder',org:'Clarifier le besoin, les utilisateurs et les priorités.',date:'Le bon problème, avant la solution.'},{year:'02',title:'Relier les différentes couches',org:'Front-end, back-end et données : une expérience cohérente.',date:'De l’interface à la logique métier.'},{year:'03',title:'Tester, apprendre, améliorer',org:'Vérifier le fonctionnement et intégrer les retours.',date:'Un projet se construit aussi par itérations.'}]}
];
function Journey() {
 const [active,setActive]=useState(0);const chapter=journeyChapters[active];
 const choose=i=>setActive((i+3)%3);
 const keyboard=(e,i)=>{if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?2:(i+(['ArrowDown','ArrowRight'].includes(e.key)?1:2))%3;choose(next);document.getElementById('chapter-choice-'+next)?.focus();}};
 return <section id="parcours" className="chapter-section" aria-labelledby="chapters-title"><div className="container chapter-layout"><div className="chapter-sidebar"><Eyebrow>Mon parcours / Miwa</Eyebrow><h2 id="chapters-title">Trois facettes.<br/>Une même envie<br/><em>de construire.</em></h2><p>Formation, expérience et façon de penser : trois chapitres pour découvrir mon parcours.</p><div className="chapter-choices" role="tablist" aria-label="Chapitres de mon parcours" aria-orientation="vertical">{journeyChapters.map((item,i)=><button key={item.id} id={'chapter-choice-'+i} role="tab" aria-selected={active===i} aria-controls="chapter-detail" tabIndex={active===i?0:-1} onClick={()=>choose(i)} onKeyDown={e=>keyboard(e,i)}><span className="chapter-choice-number">0{i+1}</span><Icon icon={item.icon} size={20}/><span>{item.label}</span><ChevronRight size={18}/></button>)}</div></div>
 <div className={"chapter-sheet-stack tone-"+chapter.tone}><div className="chapter-sheet-back back-one" aria-hidden="true"/><div className="chapter-sheet-back back-two" aria-hidden="true"/><div id="chapter-detail" className="chapter-sheet" role="tabpanel" aria-labelledby={'chapter-choice-'+active} tabIndex="0"><div className="chapter-detail-content" key={chapter.id}><div className="chapter-sheet-top"><span>0{active+1}<i/></span><Icon icon={chapter.icon} size={40}/></div><h3>{chapter.label}</h3><p className="chapter-sheet-intro">{chapter.intro}</p><ol className={'chapter-milestones '+(chapter.items.length===4?'four-milestones':'')}>{chapter.items.map((item,i)=><li key={item.org+item.date} style={{'--entry-delay':i*55+'ms'}}><span className="chapter-milestone-year">{item.year}</span><span className="chapter-milestone-rule" aria-hidden="true"/><h4>{chapter.id==='experience'?item.org:item.title}</h4><p>{chapter.id==='experience'?(item.type==='Stage'?'Stage professionnel · 1 mois':'Expérience professionnelle'):item.org}</p><span className="chapter-milestone-date">{item.date}</span></li>)}</ol></div><div className="chapter-sheet-footer"><span><i/>{active===0?'De la théorie à la pratique.':active===1?'Des rencontres, des projets, des apprentissages.':'Comprendre, construire, améliorer.'}</span><div><button aria-label="Chapitre précédent" onClick={()=>choose(active-1)}><ArrowLeft size={16}/></button><span aria-live="polite">0{active+1} / 03</span><button aria-label="Chapitre suivant" onClick={()=>choose(active+1)}><ArrowRight size={16}/></button></div></div></div></div></div></section>;
}

const methodSteps=[
 {title:'On fait connaissance',label:'Réunion de cadrage',icon:Users,desc:'Un premier échange pour comprendre votre activité, vos objectifs, vos utilisateurs et vos contraintes.',output:'Une vision commune du projet',tasks:['Échanger sur votre activité','Identifier vos utilisateurs','Définir les objectifs']},
 {title:'On précise le besoin',label:'Analyse des besoins',icon:Search,desc:'Je clarifie les parcours, les fonctionnalités attendues et les priorités pour construire une solution adaptée à votre usage.',output:'Des besoins structurés et priorisés',tasks:['Décrire les parcours utilisateurs','Lister les fonctionnalités','Clarifier les contraintes']},
 {title:'On pose les fondations',label:'Cahier des charges',icon:Folder,desc:'Nous formalisons le périmètre, les fonctionnalités, les critères de validation et les choix techniques avant de lancer la réalisation.',output:'Un cahier des charges validé ensemble',tasks:['Définir le périmètre','Choisir les solutions techniques','Fixer les critères de validation']},
 {title:'On prépare la suite',label:'Product backlog',icon:Layers,desc:'Les fonctionnalités deviennent des éléments de backlog. Nous les ordonnons selon leur valeur et préparons un premier objectif de sprint.',output:'Un backlog ordonné et un objectif clair',tasks:['Rédiger les user stories','Ordonner le backlog','Préparer le sprint']},
 {title:'On avance par sprints',label:'Réalisation itérative',icon:Code2,desc:'Chaque sprint poursuit un objectif concret : développer, tester et intégrer des fonctionnalités utilisables, avec des échanges réguliers sur les avancées et les blocages.',output:'Un incrément fonctionnel et testé',tasks:['Planifier un objectif de sprint','Développer et tester','Partager les avancées']},
 {title:'On valide, puis on améliore',label:'Review & livraison',icon:Check,desc:'Nous examinons le résultat lors de la review. Les retours enrichissent le backlog ; la rétrospective sert à améliorer la façon de travailler. La mise en ligne intervient après validation.',output:'Une livraison validée et une suite définie',tasks:['Démontrer les fonctionnalités','Recueillir vos retours','Livrer et préparer les évolutions']}
];
function Methodology(){
 const [active,setActive]=useState(0);const step=methodSteps[active];const choose=i=>setActive(Math.max(0,Math.min(5,i)));
 const keyboard=(e,i)=>{if(['ArrowRight','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();const next=e.key==='Home'?0:e.key==='End'?5:(i+(e.key==='ArrowRight'?1:5))%6;choose(next);document.getElementById('guided-step-'+next)?.focus();}};
 return <section id="methode" className="guided-method" aria-labelledby="guided-title"><div className="container guided-container"><header className="guided-heading"><div><Eyebrow>Ma méthodologie de travail</Eyebrow><h2 id="guided-title">Une idée au départ.<br/><em>Un projet qui avance.</em></h2></div><p>Un cadrage partagé, puis des sprints pour développer, tester et améliorer. Vous participez aux décisions à chaque étape.</p></header>
 <div className="guided-route"><div className="guided-cycle-back" aria-hidden="true"/><span className="guided-cycle-label">DES CYCLES POUR CONSTRUIRE & AMÉLIORER</span><div className="guided-stages" role="tablist" aria-label="Étapes de travail">{methodSteps.map((item,i)=><button key={item.label} id={'guided-step-'+i} role="tab" aria-selected={active===i} aria-controls="guided-detail" tabIndex={active===i?0:-1} className={i<active?'guided-visited':''} onClick={()=>choose(i)} onKeyDown={e=>keyboard(e,i)}><span className="guided-stage-number">0{i+1}</span><Icon icon={item.icon} size={24}/><span>{i===4?'Sprints':item.label}</span></button>)}</div><div className="guided-return" aria-label="Les retours permettent d’adapter le backlog pour le sprint suivant"><svg viewBox="0 0 500 62" preserveAspectRatio="none" aria-hidden="true"><path d="M438 1 C515 1 510 54 444 54 H102 Q43 54 43 18 M35 28 L43 16 L53 25"/></svg><span>Retours & amélioration</span></div></div>
 <div id="guided-detail" className="guided-detail" role="tabpanel" aria-labelledby={'guided-step-'+active} tabIndex="0"><div className="guided-detail-inner" key={active}><div className="guided-story"><span className="guided-kicker">ÉTAPE 0{active+1} / 06</span><h3>{step.title}</h3><span className="guided-gold-rule" aria-hidden="true"/><p>{step.desc}</p></div><div className="guided-tasks"><h4>Les tâches clés de cette étape</h4><ul>{step.tasks.map((task,i)=><li key={task} style={{'--task-delay':i*55+'ms'}}><span><Check size={13}/></span>{task}</li>)}</ul></div><aside className="guided-result"><Icon icon={active===2?Folder:Check} size={32}/><div><span>Le résultat</span><h4>{step.output}</h4></div><p>{active<3?'Un cadre commun pour préparer la suite du projet.':'Une base concrète pour valider les avancées et préparer la suite.'}</p></aside></div></div>
 <footer className="guided-controls"><button onClick={()=>choose(active-1)} disabled={active===0}><ArrowLeft size={17}/><span>Étape précédente</span></button><span className="guided-pagination" aria-live="polite">0{active+1} / 06</span><button onClick={()=>active===5?choose(3):choose(active+1)}><span>{active===5?'Revenir au backlog':'Étape suivante'}</span><ArrowRight size={17}/></button></footer></div></section>;
}

function Contact(){
 const [copied,setCopied]=useState(false),[prepared,setPrepared]=useState(false),[interest,setInterest]=useState('');
 const copyTimer=useRef(null);
 useEffect(()=>()=>clearTimeout(copyTimer.current),[]);
 async function copy(){try{await navigator.clipboard.writeText(email);setCopied(true);clearTimeout(copyTimer.current);copyTimer.current=setTimeout(()=>setCopied(false),2500);}catch{setCopied(false);window.location.href='mailto:'+email;}}
 function submit(e){e.preventDefault();const data=new FormData(e.currentTarget);const subject=encodeURIComponent('Portfolio — '+(interest?interest+' — ':'')+'Message de '+data.get('name'));const body=encodeURIComponent('Bonjour Maroua,\n\n'+(interest?'Type de projet : '+interest+'\n\n':'')+data.get('message')+'\n\n'+data.get('name')+'\n'+data.get('email'));window.location.href='mailto:'+email+'?subject='+subject+'&body='+body;setPrepared(true);}
 return <section id="contact" className="creative-contact" aria-labelledby="contact-title"><div className="container creative-contact-container"><Eyebrow>Et si on créait ensemble ?</Eyebrow><h2 id="contact-title">Une idée en tête ? <em>Parlons-en.</em></h2><div className="creative-contact-layout"><div className="creative-contact-intro"><p>Je conçois et développe des expériences web sur mesure, de l’idée à la réalisation. Discutons de votre projet et voyons comment lui donner vie ensemble.</p><div className="creative-contact-links"><div className="creative-email-card"><Mail size={22}/><div><a href={'mailto:'+email}>{email}</a><button onClick={copy}>{copied?'Adresse copiée !':'Copier l’adresse'}</button></div><button onClick={copy} aria-label="Copier l’adresse e-mail"><Icon icon={copied?Check:Copy} size={18}/></button></div><a className="creative-profile-card" href="https://www.linkedin.com/in/maroua-ouadrhiri-056003277/" target="_blank" rel="noreferrer"><Users size={23}/><span><strong>LinkedIn</strong><small>Voir mon profil</small></span><ArrowUpRight size={19}/></a><a className="creative-profile-card" href="https://github.com/MarouaOuadrhiri" target="_blank" rel="noreferrer"><Github size={23}/><span><strong>GitHub</strong><small>Voir mes projets</small></span><ArrowUpRight size={19}/></a></div><span className="creative-hello" aria-hidden="true">hello, miwa(); <i/></span><span className="sr-only" role="status">{copied?'Adresse e-mail copiée':''}</span></div>
 {/* Formulaire temporairement désactivé.
 <form className="creative-message-form" onSubmit={submit}><fieldset><legend>Votre projet <span>(optionnel)</span></legend><div className="creative-interest-options">{['Site web','SaaS','Landing page'].map(type=><label key={type} className={interest===type?'is-selected':''}><input type="radio" name="projectType" value={type} checked={interest===type} onChange={()=>setInterest(type)}/><span>{type}</span></label>)}{interest&&<button type="button" className="creative-interest-reset" onClick={()=>setInterest('')} aria-label="Effacer le type de projet"><X size={15}/></button>}</div></fieldset><div className="creative-form-row"><label>Votre nom<input name="name" autoComplete="name" placeholder="Comment vous appelez-vous ?" required maxLength={100}/></label><label>Votre e-mail<input name="email" type="email" autoComplete="email" placeholder="vous@exemple.com" required maxLength={160}/></label></div><label className="creative-message-label">Votre message<textarea name="message" rows={5} placeholder="Parlez-moi de votre idée…" required maxLength={3000}/></label><div className="creative-message-submit"><small>Ouvre votre application de messagerie.</small><button className="button" type="submit">Préparer mon e-mail <ArrowRight size={18}/></button></div><p className="creative-form-status" role="status">{prepared?'Si votre messagerie ne s’ouvre pas, vous pouvez copier mon adresse e-mail.':''}</p></form>
 */}</div></div></section>;
}

function BrandIntro() {
  const moving = useRef(null);
  const target = useRef(null);
  const [ready, setReady] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    if (ready) return;
    let cancelled = false;
    let animation;
    const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
    const play = async () => {
      await Promise.all(Array.from(moving.current.querySelectorAll('img')).map(img => img.decode().catch(() => {})));
      if (cancelled) return;
      await pause(300);
      if (cancelled) return;
      moving.current.style.opacity = '1';
      moving.current.classList.add('writing');
      await pause(2900);
      if (cancelled) return;
      const box = target.current.getBoundingClientRect();
      const width = Math.min(620, innerWidth * .82);
      animation = moving.current.animate([
        { left: '50%', top: '50%', width: width + 'px', transform: 'translate(-50%, -50%)', opacity: 1, filter: 'blur(0)' },
        { left: box.left + box.width / 2 + 'px', top: box.top + box.height / 2 + 'px', width: '160px', transform: 'translate(-50%, -50%)', opacity: 1, filter: 'blur(0)' }
      ], { duration: 1150, easing: 'cubic-bezier(.76,0,.24,1)', fill: 'forwards' });
      await animation.finished.catch(() => {});
      if (cancelled) return;
      moving.current.classList.add('gather');
      await pause(550);
      if (!cancelled) setReady(true);
    };
    play();
    return () => { cancelled = true; animation?.cancel(); };
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('intro-running', !ready);
    return () => document.documentElement.classList.remove('intro-running');
  }, [ready]);
  return <div className={ready ? 'brand-intro ready' : 'brand-intro'}>
    <a ref={target} className="miwa-home" href="#accueil" aria-label="Miwa — Maroua Ouadrhiri, accueil"><img src={ASSET_BASE+"miwa-icon-transparent.png"} alt="" /></a>
    {!ready && <div className="intro-curtain" aria-hidden="true"><div className="flying-brand" ref={moving}><svg className="intro-wordmark pen-wordmark" viewBox="0 0 2048 683" role="presentation">
<defs>
  <mask id="miwa-pen-reveal" maskUnits="userSpaceOnUse" x="0" y="0" width="2048" height="683"><rect width="2048" height="683" fill="black"/><path className="pen-trace" pathLength="1" d="M130 392 Q120 445 225 390 L555 230 Q620 192 564 287 L455 413 L635 305 Q675 284 628 365 L598 403 L709 335 Q743 316 724 371 Q714 407 776 379 L848 326 Q880 307 851 357 Q822 402 886 386 L1036 287 Q1085 259 1033 329 L990 393 L1124 326 Q1165 305 1141 359 Q1120 409 1196 377 L1310 323 Q1380 280 1452 311 L1390 377 Q1350 407 1350 370 Q1355 335 1470 316 L1458 365 Q1420 435 1548 405 L1740 358 Q1855 325 1910 365" fill="none" stroke="white" strokeWidth="115" strokeLinecap="round" strokeLinejoin="round"/><rect className="pen-complete" width="2048" height="450" fill="white" opacity="0"/></mask>
  <mask id="miwa-no-dot" maskUnits="userSpaceOnUse" x="0" y="0" width="2048" height="683"><rect width="2048" height="450" fill="white"/><circle cx="891" cy="237" r="33" fill="black"/></mask>
  <clipPath id="miwa-dot-only"><circle cx="891" cy="237" r="30"/></clipPath>
  <clipPath id="miwa-subtitle-only"><rect x="0" y="450" width="2048" height="233"/></clipPath>
</defs>
<g mask="url(#miwa-no-dot)"><image href={ASSET_BASE+"miwa-logo-green-white.png"} width="2048" height="683" mask="url(#miwa-pen-reveal)"/></g>
<g className="pen-dot"><image href={ASSET_BASE+"miwa-logo-green-white.png"} width="2048" height="683" clipPath="url(#miwa-dot-only)"/></g>
<image className="pen-subtitle" href={ASSET_BASE+"miwa-logo-green-white.png"} width="2048" height="683" clipPath="url(#miwa-subtitle-only)"/>
</svg><img className="intro-symbol" src={ASSET_BASE+"miwa-icon-transparent.png"} alt=""/></div></div>}
  </div>;
}


function ThemePull() {
  const [dark, setDark] = useState(() => { try { return localStorage.getItem('miwa-theme') === 'dark'; } catch { return false; } });
  const [pull, setPull] = useState(0);
  const origin = useRef(null);
  const dragged = useRef(false);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    try { localStorage.setItem('miwa-theme', dark ? 'dark' : 'light'); } catch {}
  }, [dark]);
  useEffect(() => {
    const update = () => document.documentElement.classList.toggle('page-scrolled', window.scrollY > 40);
    update(); window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <button className="theme-pull" style={{'--pull': pull + 'px'}} aria-label={dark ? 'Activer le mode clair' : 'Activer le mode sombre'} aria-pressed={dark} title="Tirez pour changer d’ambiance" onPointerDown={e => { origin.current=e.clientY; dragged.current=false; e.currentTarget.setPointerCapture(e.pointerId); }} onPointerMove={e => { if(origin.current === null)return; const distance=Math.max(0,Math.min(65,e.clientY-origin.current));setPull(distance);if(distance>20)dragged.current=true; }} onPointerUp={() => { if(dragged.current)setDark(v=>!v);origin.current=null;setPull(0); }} onPointerCancel={()=>{origin.current=null;setPull(0);dragged.current=false;}} onClick={()=>{if(!dragged.current)setDark(v=>!v);dragged.current=false;}}><span className="pull-cord"/><span className="pull-bead"><svg className="pull-rays" viewBox="0 0 64 64" aria-hidden="true">{Array.from({length:12},(_,i)=><line key={i} x1="32" y1="3" x2="32" y2="10" transform={`rotate(${i*30} 32 32)`}/>)}</svg>{dark ? '☀' : '☾'}</span><span className="pull-tooltip" role="tooltip">Changer d’ambiance</span><span className="pull-caption">{dark ? 'LIGHT' : 'DARK'}</span></button>;
}


const expertise = [
  {id:'front',label:'Front-end',subtitle:'Des interfaces soignées et responsive.',icon:Monitor,color:'#245b46',items:[['React','react'],['Angular','angular'],['JavaScript','javascript'],['HTML5','html5'],['CSS3','css3'],['Bootstrap','bootstrap']]},
  {id:'back',label:'Back-end & APIs',subtitle:'La logique derrière chaque expérience.',icon:Code2,color:'#527252',items:[['Django','django'],['Laravel','laravel'],['Spring Boot','spring'],['Python','python'],['Node.js','nodejs']]},
  {id:'data',label:'Bases de données',subtitle:'Des données structurées et connectées.',icon:Database,color:'#7a8260',items:[['MySQL','mysql'],['MongoDB','mongodb']]},
  {id:'cms',label:'WordPress & e-commerce',subtitle:'Des sites et boutiques à votre image.',icon:Globe,color:'#8a7651',items:[['WordPress','wordpress'],['WooCommerce','woocommerce']]}
];
function ExpertiseFolder({group,index}) {
  const [pinned,setPinned]=useState(false),[hovered,setHovered]=useState(false),[focused,setFocused]=useState(false);
  const open=pinned||hovered||focused;
  const panelId='folder-tools-'+group.id;
  return <article className={'expertise-folder '+(open?'folder-open':'')} style={{'--folder-color':group.color}} onPointerEnter={e=>{if(e.pointerType==='mouse')setHovered(true);}} onPointerLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={e=>{if(!e.currentTarget.contains(e.relatedTarget))setFocused(false);}} onKeyDown={e=>{if(e.key==='Escape'){setPinned(false);setHovered(false);setFocused(false);e.stopPropagation();}}}>
    <div className="folder-stage">
      <div className="folder-back" aria-hidden="true"><span className="folder-tab">0{index+1}</span></div>
      <ul id={panelId} className="folder-papers" aria-label={'Technologies '+group.label} aria-hidden={!open}>{group.items.map(([name,asset],i)=><li className="tech-paper" key={name} style={{'--paper-x':((i%3)-1)*76+'px','--paper-y':(-150+Math.floor(i/3)*76)+'px','--paper-rotation':((i%3)-1)*9+'deg','--paper-delay':i*35+'ms'}}><img src={ASSET_BASE+'tech/'+asset+'.svg'} alt="" width="29" height="29"/><span>{name}</span></li>)}</ul>
      <button className="folder-cover" aria-expanded={open} aria-controls={panelId} onClick={()=>{setPinned(v=>!v);setFocused(false);setHovered(false);}}><span className="folder-cover-top"><Icon icon={group.icon} size={24}/><span>{open?'−':'+'}</span></span><span className="folder-title">{group.label}</span><span className="folder-count">{group.items.length} technologies <ArrowUpRight size={15}/></span></button>
    </div>
    <p className="folder-subtitle">{group.subtitle}</p>
  </article>;
}
function About(){return <section id="apropos" className="building-about" aria-labelledby="building-title"><div className="container building-layout"><div className="building-copy"><span className="building-hello">hello, miwa();</span><h2 id="building-title">De l’interface<br/><em>à la donnée.</em></h2><p>Je suis Maroua Ouadrhiri, alias <strong>Miwa</strong>, développeuse Full Stack. Je conçois des sites web, des applications et des plateformes SaaS.</p><p>Je relie des interfaces soignées, une logique métier claire et des données structurées pour donner vie à vos idées.</p><a href="#projets" className="building-cta">Découvrir mes projets <ArrowUpRight size={20}/></a><div className="building-code-note" aria-hidden="true"><span>{'{'}</span><div><span>Idées</span><span>Développement</span><span>Solutions digitales</span></div><span>{'}'}</span></div><div className="building-collab"><Users size={18}/><span>Une approche collaborative et un travail organisé avec Git.</span></div></div><div className="building-tools"><span className="building-tools-hint"><Folder size={14}/> Explorez chaque couche de ma stack.</span><div className="building-diagram"><svg className="building-wires" viewBox="0 0 680 650" preserveAspectRatio="none" aria-hidden="true"><path d="M340 75H120V310H340 M340 310H580V525H500 M340 310V525H180 M340 75H590V190H515"/><circle cx="120" cy="75" r="4"/><circle cx="120" cy="310" r="4"/><circle cx="340" cy="310" r="4"/><circle cx="580" cy="310" r="4"/><circle cx="340" cy="525" r="4"/></svg><span className="building-deco code-deco" aria-hidden="true">&lt;/&gt;</span><span className="building-deco brace-deco" aria-hidden="true">{'{ }'}</span><div className="building-folders">{expertise.map((group,index)=><ExpertiseFolder key={group.id} group={group} index={index}/>)}</div></div></div></div></section>;}

const stripTools=[['Angular','angular'],['React','react'],['HTML5','html5'],['CSS3','css3'],['JavaScript','javascript'],['Tailwind CSS','tailwindcss'],['Spring Boot','spring'],['Django','django'],['Laravel','laravel'],['Python','python'],['PHP','php'],['MySQL','mysql'],['MongoDB','mongodb'],['Git','git'],['GitHub','github'],['GitLab','gitlab'],['WordPress','wordpress'],['APIs REST',null],['Bootstrap','bootstrap']];
function SkillsStrip(){
  const [paused,setPaused]=useState(false);
  return <section id="competences" className={'skills-marquee '+(paused?'is-paused':'')} aria-label="Mes compétences et technologies"><div className="skills-marquee-window"><div className="skills-marquee-track">{[0,1].map(copy=><ul className="skills-marquee-group" key={copy} aria-hidden={copy===1?true:undefined}>{stripTools.map(([name,asset])=><li key={name}>{asset?<img src={ASSET_BASE+'tech/'+asset+'.svg'} alt="" width="23" height="23"/>:<Code2 size={23} aria-hidden="true"/>}<span>{name}</span><i aria-hidden="true"/></li>)}</ul>)}</div></div><button className="marquee-toggle" onClick={()=>setPaused(v=>!v)} aria-label={paused?'Reprendre le défilement des compétences':'Mettre en pause le défilement des compétences'} aria-pressed={paused}>{paused?<span aria-hidden="true">▶</span>:<span aria-hidden="true">Ⅱ</span>}</button></section>;
}

function App(){
  const [menuOpen,setMenuOpen]=useState(false);const [active,setActive]=useState('accueil');const [modal,setModal]=useState(null);const [selected,setSelected]=useState(0);
  const nav=[['accueil','Accueil'],['parcours','Parcours'],['apropos','À propos'],['competences','Compétences'],['projets','Projets']];
  useEffect(()=>{const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)setActive(e.target.id);});},{rootMargin:'-20% 0px -60% 0px'});document.querySelectorAll('main section[id]').forEach(el=>observer.observe(el));return()=>observer.disconnect();},[]);
  useEffect(()=>{if(!menuOpen)return;function onKey(e){if(e.key==='Escape'){setMenuOpen(false);document.querySelector('.menu-toggle')?.focus();}}window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);},[menuOpen]);
  return <><a href="#main" className="skip-link">Aller au contenu</a><header className="site-header"><div className="container nav-inner"><BrandIntro/><button className="menu-toggle round-button" aria-label={menuOpen?'Fermer le menu':'Ouvrir le menu'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={()=>setMenuOpen(!menuOpen)}><Icon icon={menuOpen?X:Menu}/></button><nav id="main-navigation" className={menuOpen?'open':''} aria-label="Navigation principale">{nav.map(([id,label])=><a key={id} href={`#${id}`} className={active===id?'active':''} aria-current={active===id?'location':undefined} onClick={()=>setMenuOpen(false)}>{label}</a>)}<a href="#contact" className="nav-contact" onClick={()=>setMenuOpen(false)}>Contact<Icon icon={ArrowUpRight} size={15}/></a></nav></div><ThemePull/></header><main id="main"><section id="accueil" className="miwa-hero creative-desk" aria-label="Miwa — Maroua Ouadrhiri"><div className="desk-reveal"><div className="desk-photograph"><picture className="desk-light-picture"><source media="(max-width: 700px)" srcSet={ASSET_BASE+"miwa-desk-mobile-v4.png"}/><img className="desk-photo" src={ASSET_BASE+"miwa-desk-light-v3.png"} alt="Maroua Ouadrhiri à son bureau" fetchPriority="high"/></picture><picture className="desk-dark-picture"><source media="(max-width: 700px)" srcSet={ASSET_BASE+"miwa-desk-mobile-dark-v4.png"}/><img className="desk-photo desk-photo-dark" src={ASSET_BASE+"miwa-desk-dark-v3.png"} alt="" aria-hidden="true"/></picture></div><div className="desk-wall-wash" aria-hidden="true"/><span className="desk-spark" aria-hidden="true">✦</span><div className="container desk-content"><div className="desk-intro"><p className="desk-eyebrow">MAROUA OUADRHIRI<span>DÉVELOPPEUSE FULL STACK</span></p><h1>Des idées<br/>aux <em>interfaces.</em></h1><p className="desk-description">Je développe des expériences web utiles et soignées, en alliant technique et sens du détail.</p><div className="desk-actions"><CvLink className="hero-cv"/><a href="#projets" className="button">Voir mes projets <Icon icon={ArrowUpRight}/></a><a href="#contact" className="desk-talk">Me contacter <ArrowRight size={16}/></a></div></div><div className="desk-skill desk-front"><Monitor size={21}/><div><strong>Front-end</strong><span>Angular · React<br/>JavaScript<br/>HTML & CSS</span></div></div><div className="desk-skill desk-back"><Database size={21}/><div><strong>Back-end</strong><span>Spring Boot<br/>Django · Laravel<br/>MySQL · MongoDB</span></div></div><div className="desk-bottom"><span>DU CODE. DU SENS. DU CARACTÈRE.</span><a href="#apropos">Découvrir mon univers <span>↓</span></a></div></div></div></section><Journey/><SkillsStrip/><About/>
  <Projects onOpen={setModal} selected={selected} setSelected={setSelected}/><Methodology/><Contact/></main><footer><div className="container footer-inner"><a className="wordmark" href="#accueil">Maroua Ouadrhiri<span>.</span></a><span>Développé avec soin · {new Date().getFullYear()}</span><a href="#accueil">Retour en haut <Icon icon={ArrowUp} size={16}/></a></div></footer>{modal&&<ProjectDialog project={modal} close={()=>setModal(null)}/>}</>;
}
createRoot(document.getElementById('root')).render(<App/>);



