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
  [x: string]: any;

  isScrolled = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.listen(window, 'scroll', () => {
      this.isScrolled = window.scrollY > 50; // Cambia el valor según tus necesidades
    });
  }

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}


