import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AboutmePageComponent } from '../../about/aboutme-page/aboutme-page.component';
import { TimelinePageComponent } from '../../timeline/timeline-page/timeline-page.component';
import { ProjectsPageComponent } from "../../project/projects-page/projects-page.component";
import { ContactPageComponent } from '../../contact/contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../../shared/footer/footer/footer.component";
import { NavbarComponent } from "../../../shared/navbar/navbar/navbar.component";



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, FormsModule, TimelinePageComponent, ProjectsPageComponent,
    AboutmePageComponent, RouterModule, FooterComponent, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  
  isScrolled = false;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object // Para verificar si estamos en el navegador
  ) { }

  ngOnInit(): void {
    // Verifica que el código solo se ejecute en el navegador
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.listen(window, 'scroll', () => {
        this.isScrolled = window.scrollY > 50;
      });
    }
  }

  // Función para desplazarse suavemente
  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}

