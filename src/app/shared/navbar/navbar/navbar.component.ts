import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  // inyecto el servicio Renderer2 para interactuar con el DOM de forma segura.
  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef // Inyectamos el ChangeDetectorRef
  ) { }

  isScrolled = false; // Indica si la página ha sido desplazada hacia abajo (scroll).

  ngOnInit(): void {
    // Uso Renderer2 para "escuchar" el evento de desplazamiento (scroll) en la ventana.
    this.renderer.listen(window, 'scroll', () => {
      // Cambia el valor de isScrolled si la página se desplaza más de 50 píxeles.
      this.isScrolled = window.scrollY > 50;
    });
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Cambiamos el valor de menuOpen al opuesto cada vez que se llama.
  }

  ngAfterViewChecked(): void {
    // Asegura que las animaciones se detecten después de la vista
    this.cdr.markForCheck();
  }
  
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault(); // Previene el comportamiento predeterminado del enlace
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.cdr.detectChanges(); // Fuerza la detección de cambios después de hacer scroll
      //para que se vean las animaciones
    }
  }


}