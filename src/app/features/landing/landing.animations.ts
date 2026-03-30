import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const landingAnimations = [
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
        stagger(100, [animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))])
      ], { optional: true })
    ])
  ])
];
