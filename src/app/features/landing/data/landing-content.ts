import { HighlightItem } from '../../../core/models/highlight-item.model';
import { NavItem } from '../../../core/models/nav-item.model';
import { ServiceItem } from '../../../core/models/service-item.model';

export type AppLanguage = 'fr' | 'en' | 'ar';

export const SECTION_IDS = ['home', 'about', 'services', 'why-choose-us', 'contact'] as const;

export const NAV_ITEMS_BY_LANG: Record<AppLanguage, NavItem[]> = {
  fr: [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose-us', label: 'Pourquoi nous choisir' },
    { id: 'contact', label: 'Contact' }
  ],
  en: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-choose-us', label: 'Why choose us' },
    { id: 'contact', label: 'Contact' }
  ],
  ar: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'الخدمات' },
    { id: 'why-choose-us', label: 'لماذا نحن' },
    { id: 'contact', label: 'تواصل' }
  ]
};

export const SERVICES_BY_LANG: Record<AppLanguage, ServiceItem[]> = {
  fr: [
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
  ],
  en: [
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'Web Applications',
      description: 'Modern websites, SPA applications, e-commerce platforms, and interactive dashboards built with the latest technologies.',
      technologies: ['Angular', 'React', 'Node.js', 'Python']
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Mobile Applications',
      description: 'High-performance native and cross-platform apps for iOS and Android with an outstanding user experience.',
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin']
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure, CI/CD deployment, and microservices architecture for ambitious products.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'AI & Data',
      description: 'Artificial intelligence, machine learning, and data analytics solutions to turn your data into actionable insights.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Pandas']
    }
  ],
  ar: [
    {
      icon: 'fa-solid fa-laptop-code',
      title: 'تطبيقات الويب',
      description: 'مواقع حديثة وتطبيقات SPA ومنصات تجارة إلكترونية ولوحات تحكم تفاعلية بأحدث التقنيات.',
      technologies: ['Angular', 'React', 'Node.js', 'Python']
    },
    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'تطبيقات الجوال',
      description: 'تطبيقات أصلية وعابرة للمنصات عالية الأداء لنظامي iOS وAndroid مع تجربة استخدام مميزة.',
      technologies: ['Flutter', 'React Native', 'Swift', 'Kotlin']
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'حلول سحابية',
      description: 'بنية سحابية قابلة للتوسع ونشر CI/CD وهندسة ميكروسيرفس لمشاريعكم الطموحة.',
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      icon: 'fa-solid fa-brain',
      title: 'الذكاء الاصطناعي والبيانات',
      description: 'حلول الذكاء الاصطناعي وتعلم الآلة وتحليلات البيانات لتحويل بياناتكم إلى قرارات عملية.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Pandas']
    }
  ]
};

export const TEAM_HIGHLIGHTS: HighlightItem[] = [
  { icon: 'fa-solid fa-graduation-cap', title: 'Étudiants Ingénieurs', description: 'Formés dans les meilleures écoles' },
  { icon: 'fa-solid fa-lightbulb', title: 'Curieux & Créatifs', description: "Toujours à la pointe de l'innovation" },
  { icon: 'fa-solid fa-code', title: 'Geeks Passionnés', description: 'La tech dans notre ADN' },
  { icon: 'fa-solid fa-handshake', title: 'Partenaires Fiables', description: 'Engagement et professionnalisme' }
];
