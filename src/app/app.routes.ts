import { Routes } from '@angular/router';
import { LandingPageComponent } from './features/landing/landing.page';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: '**', redirectTo: '' }
];
