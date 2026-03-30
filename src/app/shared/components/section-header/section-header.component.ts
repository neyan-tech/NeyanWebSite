import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header">
      <span class="section-tag">{{ tag }}</span>
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </div>
  `
})
export class SectionHeaderComponent {
  @Input({ required: true }) tag!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
}
