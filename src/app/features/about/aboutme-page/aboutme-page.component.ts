import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme-page.component.html',
  styleUrls: ['./aboutme-page.component.css']
})
export class AboutmePageComponent {

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


}
