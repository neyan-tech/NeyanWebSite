import { HighlightItem } from '../../../core/models/highlight-item.model';
import { NavItem } from '../../../core/models/nav-item.model';
import { ServiceItem } from '../../../core/models/service-item.model';

export const SECTION_IDS = ['home', 'about', 'services', 'why-choose-us', 'contact'] as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À Propos' },
  { id: 'services', label: 'Services' },
  { id: 'why-choose-us', label: 'Pourquoi nous choisir' },
  { id: 'contact', label: 'Contact' }
];

export const SERVICES: ServiceItem[] = [
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Applications Web',
    description: 'Sites web modernes, applications SPA, plateformes e-commerce et dashboards interactifs avec les dernières technologies.',
    technologies: ['Angular', 'React', 'Node.js', 'Python']
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Applications Mobile',
    description: 'Applications natives et cross-platform performantes pour iOS et Android avec une expérience utilisateur exceptionnelle.',
    technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin']
  },
  {
    icon: 'fa-solid fa-cloud',
    title: 'Solutions Cloud',
    description: 'Infrastructure cloud scalable, déploiement CI/CD et architecture microservices pour vos projets ambitieux.',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
  },
  {
    icon: 'fa-solid fa-brain',
    title: 'IA & Data',
    description: "Solutions d'intelligence artificielle, machine learning et analyse de données pour transformer vos données en insights.",
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Pandas']
  }
];

export const TEAM_HIGHLIGHTS: HighlightItem[] = [
  { icon: 'fa-solid fa-graduation-cap', title: 'Étudiants Ingénieurs', description: 'Formés dans les meilleures écoles' },
  { icon: 'fa-solid fa-lightbulb', title: 'Curieux & Créatifs', description: "Toujours à la pointe de l'innovation" },
  { icon: 'fa-solid fa-code', title: 'Geeks Passionnés', description: 'La tech dans notre ADN' },
  { icon: 'fa-solid fa-handshake', title: 'Partenaires Fiables', description: 'Engagement et professionnalisme' }
];
