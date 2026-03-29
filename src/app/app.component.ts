import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('staggerList', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';
  currentYear = new Date().getFullYear();

  // Contact form
  contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  formSubmitted = false;

  // Services data
  services = [
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
      description: 'Solutions d\'intelligence artificielle, machine learning et analyse de données pour transformer vos données en insights.',
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Pandas']
    }
  ];

  // Stats data
  stats = [
    { value: '1.5M', label: 'Chiffre d\'Affaires MRU', icon: 'fa-solid fa-chart-line' },
    { value: '2025', label: 'Année de Création', icon: 'fa-solid fa-rocket' },
    { value: '1', label: 'Projet Majeur', icon: 'fa-solid fa-trophy' },
    { value: '100%', label: 'Passion Tech', icon: 'fa-solid fa-heart' }
  ];

  // Team highlights
  teamHighlights = [
    { icon: 'fa-solid fa-graduation-cap', title: 'Étudiants Ingénieurs', description: 'Formés dans les meilleures écoles' },
    { icon: 'fa-solid fa-lightbulb', title: 'Curieux & Créatifs', description: 'Toujours à la pointe de l\'innovation' },
    { icon: 'fa-solid fa-code', title: 'Geeks Passionnés', description: 'La tech dans notre ADN' },
    { icon: 'fa-solid fa-handshake', title: 'Partenaires Fiables', description: 'Engagement et professionnalisme' }
  ];

  // Navigation items
  navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'services', label: 'Services' },
    { id: 'project', label: 'Projet' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit() {
    // Initialize any required setup
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  updateActiveSection() {
    const sections = ['home', 'about', 'services', 'project', 'contact'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string) {
    this.mobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  submitForm() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      // In a real app, you would send this to a backend
      console.log('Form submitted:', this.contactForm);
      this.formSubmitted = true;
      
      // Reset form after 3 seconds
      setTimeout(() => {
        this.formSubmitted = false;
        this.contactForm = { name: '', email: '', subject: '', message: '' };
      }, 3000);
    }
  }

  openEmail() {
    window.location.href = 'mailto:neyan.office@gmail.com';
  }
}
