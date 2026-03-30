import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService {
  getActiveSection(sectionIds: string[], offset = 100): string | null {
    for (const sectionId of sectionIds) {
      const element = document.getElementById(sectionId);
      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom >= offset) {
        return sectionId;
      }
    }

    return null;
  }
}
