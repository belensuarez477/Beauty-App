import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contactanos',
  imports: [FormsModule, CommonModule],
  templateUrl: './contactanos.html'
})
export class Contactanos {
  nombre = '';
  email = '';
  telefono = '';
  mensaje = '';

  toastVisible = false;
  toastMessage = '';

  enviarContacto() {
    this.toastMessage = 'Mensaje enviado correctamente';
    this.toastVisible = true;
  }
}
