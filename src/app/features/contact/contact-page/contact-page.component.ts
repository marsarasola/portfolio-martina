import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../shared/navbar/navbar/navbar.component";
import { FooterComponent } from "../../../shared/footer/footer/footer.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return (control?.invalid ?? false) && (control?.dirty ?? false) || (control?.touched ?? false);
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form submitted successfully:', this.contactForm.value);
      alert('Thank you for your message!');
      this.contactForm.reset(); // Opcional: Resetea el formulario tras enviarlo
    }
  }

}


