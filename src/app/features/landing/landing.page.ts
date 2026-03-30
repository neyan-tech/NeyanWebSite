import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { NAV_ITEMS, SECTION_IDS, SERVICES, TEAM_HIGHLIGHTS } from './data/landing-content';
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

  readonly navItems = NAV_ITEMS;
  readonly services = SERVICES;
  readonly teamHighlights = TEAM_HIGHLIGHTS;
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
