import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { AppLanguage, NAV_ITEMS_BY_LANG, SECTION_IDS, SERVICES_BY_LANG } from './data/landing-content';
import { landingAnimations } from './landing.animations';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SectionHeaderComponent],
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
  animations: landingAnimations
})
export class LandingPageComponent {
  private readonly formBuilder = inject(FormBuilder);

  readonly languages: { code: AppLanguage; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' }
  ];

  currentLang: AppLanguage = 'fr';
  readonly currentYear = new Date().getFullYear();

  isScrolled = false;
  mobileMenuOpen = false;
  activeSection = 'home';
  formSubmitted = false;
  isSubmitting = false;

  readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required]]
  });

  constructor(
    private readonly scrollSpyService: ScrollSpyService,
    private readonly contactService: ContactService
  ) {}

  private readonly translations: Record<AppLanguage, Record<string, string>> = {
    fr: {
      hero_badge: 'Startup Tech Mauritanienne',
      hero_title_line1: "L'Innovation portée par",
      hero_title_line2: 'de jeunes Ingénieurs',
      hero_subtitle: 'Nous sommes Neyan, une équipe de jeunes ingénieurs passionnés et geeks, développant des solutions technologiques innovantes pour transformer le futur.',
      hero_cta_contact: 'Nous Contacter',
      hero_cta_discover: 'Découvrir',

      about_label: 'À Propos',
      about_title: 'Qui Sommes-Nous ?',
      about_subtitle: 'Une équipe fiable pour transformer vos idées en solutions concrètes, avec une exécution rapide et une qualité professionnelle.',
      fast_delivery: 'Livraison Rapide',
      fast_delivery_desc: 'Nous avançons vite avec des cycles courts et une qualité maîtrisée à chaque étape.',
      reliability: 'Fiabilité & Sécurité',
      reliability_desc: 'Nous livrons un code propre, robuste et pensé pour évoluer sans compromis.',
      support_real: 'Accompagnement Réel',
      support_real_desc: 'Nous restons à vos côtés du cadrage au déploiement avec un suivi concret.',
      transparency: 'Transparence',
      communication: 'Communication',
      quality: 'Qualité',
      support: 'Support',
      method_label: 'Méthode Neyan',
      method_title: 'Notre approche orientée résultat',
      method_desc: 'Une méthode simple, structurée et collaborative pour garantir des livrables pertinents, rapides et durables.',
      method_point_1: 'Analyse précise de vos besoins et priorités.',
      method_point_2: "Plan d'exécution clair avec itérations courtes.",
      method_point_3: 'Livraison accompagnée avec suivi et amélioration continue.',

      services_tag: 'Services',
      services_title: 'Ce Que Nous Faisons',
      services_subtitle: 'Des solutions technologiques complètes pour vos projets',

      why_label: 'Pourquoi nous choisir',
      why_title: 'Pourquoi Nous Choisir',
      why_subtitle: "Choisir Neyan, c'est travailler avec une équipe qui combine expertise technique, compréhension métier et exécution rapide pour transformer vos idées en solutions concrètes.",

      contact_tag: 'Contact',
      contact_title: 'Travaillons Ensemble',
      contact_subtitle: 'Prêt à transformer votre idée en réalité ?',
      contact_intro_title: 'Parlons de votre projet',
      contact_intro_text: "Que vous ayez une idée d'application, un besoin de digitalisation ou un projet innovant, notre équipe de geeks est prête à vous accompagner.",
      label_email: 'Email',
      label_phone: 'Téléphone',
      label_location: 'Localisation',
      location_value: 'Nouakchott, Mauritanie',
      label_availability: 'Disponibilité',
      availability_value: 'Lun - Ven: 9h - 18h',
      form_name_label: 'Nom complet',
      form_name_placeholder: 'Votre nom',
      form_email_label: 'Email',
      form_email_placeholder: 'votre@email.com',
      form_subject_label: 'Sujet',
      form_subject_placeholder: 'Sujet de votre message',
      form_message_label: 'Message',
      form_message_placeholder: 'Décrivez votre projet...',
      form_send: 'Envoyer le message',
      form_sending: 'Envoi en cours...',
      form_success_title: 'Message envoyé !',
      form_success_text: 'Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.',

      footer_brand_text: 'Startup tech mauritanienne fondée par des étudiants ingénieurs passionnés. Nous transformons les idées en solutions digitales innovantes.',
      footer_nav_title: 'Navigation',
      footer_services_title: 'Services',
      footer_quick_contact_title: 'Contact Rapide',
      footer_quick_contact_text: 'Envoyez-nous un email directement :',
      footer_rights: 'Tous droits réservés.',
      nav_home: 'Accueil',
      nav_about: 'À Propos',
      nav_services: 'Services',
      nav_contact: 'Contact',
      service_web: 'Applications Web',
      service_mobile: 'Applications Mobile',
      service_cloud: 'Solutions Cloud',
      service_ai: 'IA & Data'
    },
    en: {
      hero_badge: 'Mauritanian Tech Startup',
      hero_title_line1: 'Innovation driven by',
      hero_title_line2: 'young Engineers',
      hero_subtitle: 'We are Neyan, a team of passionate young engineers and geeks building innovative technology solutions to shape the future.',
      hero_cta_contact: 'Contact Us',
      hero_cta_discover: 'Discover',
      about_label: 'About',
      about_title: 'Who Are We?',
      about_subtitle: 'A reliable team to turn your ideas into concrete solutions with fast execution and professional quality.',
      fast_delivery: 'Fast Delivery',
      fast_delivery_desc: 'We move quickly with short cycles and controlled quality at every stage.',
      reliability: 'Reliability & Security',
      reliability_desc: 'We deliver clean, robust code built to scale without compromise.',
      support_real: 'Real Support',
      support_real_desc: 'We stay by your side from scoping to deployment with practical follow-up.',
      transparency: 'Transparency',
      communication: 'Communication',
      quality: 'Quality',
      support: 'Support',
      method_label: 'Neyan Method',
      method_title: 'Our results-driven approach',
      method_desc: 'A simple, structured, and collaborative method to ensure relevant, fast, and sustainable deliverables.',
      method_point_1: 'Precise analysis of your needs and priorities.',
      method_point_2: 'Clear execution plan with short iterations.',
      method_point_3: 'Supported delivery with follow-up and continuous improvement.',
      services_tag: 'Services',
      services_title: 'What We Do',
      services_subtitle: 'Complete technology solutions for your projects',
      why_label: 'Why choose us',
      why_title: 'Why Choose Us',
      why_subtitle: 'Choosing Neyan means working with a team that combines technical expertise, business understanding, and fast execution to turn your ideas into concrete solutions.',
      contact_tag: 'Contact',
      contact_title: 'Let us work together',
      contact_subtitle: 'Ready to turn your idea into reality?',
      contact_intro_title: 'Let us talk about your project',
      contact_intro_text: 'Whether you have an app idea, a digital transformation need, or an innovative project, our geek team is ready to support you.',
      label_email: 'Email',
      label_phone: 'Phone',
      label_location: 'Location',
      location_value: 'Nouakchott, Mauritania',
      label_availability: 'Availability',
      availability_value: 'Mon - Fri: 9am - 6pm',
      form_name_label: 'Full name',
      form_name_placeholder: 'Your name',
      form_email_label: 'Email',
      form_email_placeholder: 'you@email.com',
      form_subject_label: 'Subject',
      form_subject_placeholder: 'Your message subject',
      form_message_label: 'Message',
      form_message_placeholder: 'Describe your project...',
      form_send: 'Send message',
      form_sending: 'Sending...',
      form_success_title: 'Message sent!',
      form_success_text: 'Thanks for your message. Our team will get back to you shortly.',
      footer_brand_text: 'Mauritanian tech startup founded by passionate engineering students. We turn ideas into innovative digital solutions.',
      footer_nav_title: 'Navigation',
      footer_services_title: 'Services',
      footer_quick_contact_title: 'Quick Contact',
      footer_quick_contact_text: 'Send us an email directly:',
      footer_rights: 'All rights reserved.',
      nav_home: 'Home',
      nav_about: 'About',
      nav_services: 'Services',
      nav_contact: 'Contact',
      service_web: 'Web Applications',
      service_mobile: 'Mobile Applications',
      service_cloud: 'Cloud Solutions',
      service_ai: 'AI & Data'
    },
    ar: {
      hero_badge: 'شركة تقنية موريتانية ناشئة',
      hero_title_line1: 'ابتكار يقوده',
      hero_title_line2: 'مهندسون شباب',
      hero_subtitle: 'نحن نيان، فريق من المهندسين الشباب الشغوفين نبني حلولاً تقنية مبتكرة لصناعة المستقبل.',
      hero_cta_contact: 'تواصل معنا',
      hero_cta_discover: 'اكتشف',
      about_label: 'من نحن',
      about_title: 'من نحن؟',
      about_subtitle: 'فريق موثوق يحول أفكاركم إلى حلول عملية بتنفيذ سريع وجودة احترافية.',
      fast_delivery: 'تسليم سريع',
      fast_delivery_desc: 'نتقدم بسرعة عبر دورات قصيرة مع جودة مضبوطة في كل مرحلة.',
      reliability: 'موثوقية وأمان',
      reliability_desc: 'نقدم شيفرة نظيفة ومتينة وقابلة للتوسع دون تنازلات.',
      support_real: 'مرافقة حقيقية',
      support_real_desc: 'نبقى بجانبكم من مرحلة التحديد حتى الإطلاق مع متابعة عملية.',
      transparency: 'الشفافية',
      communication: 'التواصل',
      quality: 'الجودة',
      support: 'الدعم',
      method_label: 'منهجية نيان',
      method_title: 'نهجنا المبني على النتائج',
      method_desc: 'منهجية بسيطة ومنظمة وتعاونية لضمان مخرجات مناسبة وسريعة ومستدامة.',
      method_point_1: 'تحليل دقيق لاحتياجاتكم وأولوياتكم.',
      method_point_2: 'خطة تنفيذ واضحة مع تكرارات قصيرة.',
      method_point_3: 'تسليم مصحوب بمتابعة وتحسين مستمر.',
      services_tag: 'الخدمات',
      services_title: 'ماذا نقدم',
      services_subtitle: 'حلول تقنية متكاملة لمشاريعكم',
      why_label: 'لماذا نحن',
      why_title: 'لماذا تختار نيان؟',
      why_subtitle: 'اختيار نيان يعني العمل مع فريق يجمع بين الخبرة التقنية وفهم الأعمال والتنفيذ السريع لتحويل أفكاركم إلى حلول ملموسة.',
      contact_tag: 'تواصل',
      contact_title: 'لنعمل معاً',
      contact_subtitle: 'هل أنتم مستعدون لتحويل فكرتكم إلى واقع؟',
      contact_intro_title: 'لنتحدث عن مشروعكم',
      contact_intro_text: 'سواء كانت لديكم فكرة تطبيق أو حاجة للتحول الرقمي أو مشروع مبتكر، فريقنا جاهز لمرافقتكم.',
      label_email: 'البريد الإلكتروني',
      label_phone: 'الهاتف',
      label_location: 'الموقع',
      location_value: 'نواكشوط، موريتانيا',
      label_availability: 'التوفر',
      availability_value: 'الإثنين - الجمعة: 9 صباحاً - 6 مساءً',
      form_name_label: 'الاسم الكامل',
      form_name_placeholder: 'اسمكم',
      form_email_label: 'البريد الإلكتروني',
      form_email_placeholder: 'you@email.com',
      form_subject_label: 'الموضوع',
      form_subject_placeholder: 'موضوع رسالتكم',
      form_message_label: 'الرسالة',
      form_message_placeholder: 'صف مشروعكم...',
      form_send: 'إرسال الرسالة',
      form_sending: 'جاري الإرسال...',
      form_success_title: 'تم إرسال الرسالة!',
      form_success_text: 'شكراً لرسالتكم. سيقوم فريقنا بالرد عليكم قريباً.',
      footer_brand_text: 'شركة تقنية موريتانية ناشئة أسسها طلاب هندسة شغوفون. نحوّل الأفكار إلى حلول رقمية مبتكرة.',
      footer_nav_title: 'التنقل',
      footer_services_title: 'الخدمات',
      footer_quick_contact_title: 'تواصل سريع',
      footer_quick_contact_text: 'راسلنا مباشرة عبر البريد:',
      footer_rights: 'جميع الحقوق محفوظة.',
      nav_home: 'الرئيسية',
      nav_about: 'من نحن',
      nav_services: 'الخدمات',
      nav_contact: 'تواصل',
      service_web: 'تطبيقات الويب',
      service_mobile: 'تطبيقات الجوال',
      service_cloud: 'حلول سحابية',
      service_ai: 'الذكاء الاصطناعي والبيانات'
    }
  };

  get navItems() {
    return NAV_ITEMS_BY_LANG[this.currentLang];
  }

  get services() {
    return SERVICES_BY_LANG[this.currentLang];
  }

  get isArabic(): boolean {
    return this.currentLang === 'ar';
  }

  setLanguage(lang: AppLanguage): void {
    this.currentLang = lang;
  }

  t(key: string): string {
    return this.translations[this.currentLang][key] ?? this.translations.fr[key] ?? key;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    const nextSection = this.scrollSpyService.getActiveSection([...SECTION_IDS]);
    if (nextSection) {
      this.activeSection = nextSection;
    }
  }

  scrollToSection(sectionId: string): void {
    this.mobileMenuOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  submitForm(): void {
    if (this.contactForm.invalid || this.isSubmitting) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.contactService.submit(this.contactForm.getRawValue()).subscribe({
      next: () => {
        this.formSubmitted = true;
        this.isSubmitting = false;

        setTimeout(() => {
          this.formSubmitted = false;
          this.contactForm.reset({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 3000);
      },
      error: () => {
        this.isSubmitting = false;
      }
    });
  }

  openEmail(): void {
    window.location.href = 'mailto:neyan.office@gmail.com';
  }
}
