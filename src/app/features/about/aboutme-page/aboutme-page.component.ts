import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aboutme-page.component.html',
  styleUrls: ['./aboutme-page.component.css']
})
export class AboutmePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
