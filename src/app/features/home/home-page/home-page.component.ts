import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AboutmePageComponent } from '../../about/aboutme-page/aboutme-page.component';
import { TimelinePageComponent } from '../../timeline/timeline-page/timeline-page.component';
import { ProjectsPageComponent } from "../../project/projects-page/projects-page.component";
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
export class HomePageComponent {

    scrollToSection(sectionId: string): void {
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop; // Obtiene la posición del elemento respecto al inicio de la página.
        window.scrollTo({
          top: offsetTop, // Desplaza la página a esta posición.
          behavior: 'smooth' // Desplazamiento suave.
        });
      }
    }
    
  
}

