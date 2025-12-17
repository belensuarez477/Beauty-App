import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Footer } from '../../component/footer/footer';

@Component({
  standalone: true,
  selector: 'app-contactanos',
  imports: [FormsModule, CommonModule, Footer],
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
