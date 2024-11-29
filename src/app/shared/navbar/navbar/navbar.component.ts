import { CommonModule} from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  isScrolled = false; // Indica si la página ha sido desplazada hacia abajo (scroll).

    // inyecto el servicio Renderer2 para interactuar
    // con el DOM de forma segura.
  constructor(private renderer: Renderer2) {}

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

}


