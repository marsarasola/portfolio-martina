import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.css'],
})
export class TimelinePageComponent implements OnInit {
  events: any[] = [
    {
      title: "Universidad Nacional de Mar del Plata",
      date: "2020-2022",
      description: "Computer Engineering"
    },
    {
      title: "Academia Egg",
      date: "2023",
      description: "Full-stack web developer"
    },
    {
      title: "Mar del Plata Programa",
      date: "2023",
      description: "Full-stack web developer"
    },
    {
      title: "Utest Academy",
      date: "2024",
      description: "QA, Tester"
    }
  ];

  private apiUrl = 'http://localhost:3000/events'; // URL de la API

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.apiUrl).subscribe(
      (data: any) => {
        console.log('Datos cargados:', data); // Verificar la respuesta
        this.events = data;
      },
      (error) => console.error('Error al cargar los datos:', error)
    );
  }
}
