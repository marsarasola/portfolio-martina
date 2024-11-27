import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../shared/navbar/navbar/navbar.component";
import { FooterComponent } from "../../../shared/footer/footer/footer.component";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent {
  contactForm: FormGroup;
  formspreeUrl = 'https://formspree.io/f/mqakydwd'; 

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Validaciones
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Verifica si un control es inválido
  isInvalid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return (control?.invalid && (control?.dirty || control?.touched)) ?? false;
  }

  // Maneja el envío del formulario
  onSubmit(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http.post(this.formspreeUrl, formData).subscribe(
        () => {
          alert('Message sent successfully!');
          this.contactForm.reset(); // Resetea el formulario después de enviarlo
        },
        (error) => {
          console.error('Error sending message:', error);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );
    }
  }
}


