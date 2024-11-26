
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

  projects: any[] = [
    {
      title: "APIS",
      description: "Get data from the APIs",
      image: "https://cdn.pixabay.com/photo/2024/05/06/14/23/ai-generated-8743405_640.png",
      link: "https://marsarasola.github.io/MARVEL-APIS/"
    },
    {
      title: "Phonebook",
      description: "Save contacts",
      image: "https://img.freepik.com/foto-gratis/mujer-negocios-usando-portatil-cafeteria_23-2148002168.jpg?ga=GA1.1.1936787504.1715102624&semt=ais_hybrid",
      link: "https://marsarasola.github.io/agendaDeContactos/agendaFinal/"
    },
    {
      title: "Cocos's Pizza",
      description: "Company's website",
      image: "https://proyecto9.ecolan.com/assets/img/nuestraHistoria.png",
      link: "https://proyecto9.ecolan.com/index.html"
    }
  ];

  private apiUrl = 'http://localhost:4000/projects'; // URL de la API

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get(this.apiUrl).subscribe(
    //   (data: any) => {
    //     console.log('Datos cargados:', data); // Verificar la respuesta
    //     this.projects = data;
    //   },
    //   (error) => console.error('Error al cargar los datos:', error)
    // );

    
  }
}
