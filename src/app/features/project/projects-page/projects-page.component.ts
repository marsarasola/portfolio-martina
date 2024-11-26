
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  projects: any[] = [];

  private apiUrl = 'http://localhost:4000/projects'; // URL de la API

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe(
      (data: any) => {
        console.log('Datos cargados:', data); // Verificar la respuesta
        this.projects = data;
      },
      (error) => console.error('Error al cargar los datos:', error)
    );
  }
}
