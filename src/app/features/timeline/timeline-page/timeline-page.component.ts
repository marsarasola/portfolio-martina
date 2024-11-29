import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './timeline-page.component.html',
  styleUrls: ['./timeline-page.component.css'],
})
export class TimelinePageComponent{

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

}
