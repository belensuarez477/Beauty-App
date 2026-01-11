import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-registrarse',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './registrarse.html'
})
export class Registrarse {
  nombre = '';
  email = '';
  usuario = '';
  password = '';
  confirmar = '';
  terminos = false;

  toastVisible = false;
  toastMessage = '';

  constructor(private router: Router) {}

  registrar() {
    if (this.password !== this.confirmar) {
      this.toastMessage = 'Las contraseñas no coinciden';
      this.toastVisible = true;
      return;
    }

    if (!this.terminos) {
      this.toastMessage = 'Debes aceptar los términos';
      this.toastVisible = true;
      return;
    }

    this.router.navigate(['/perfil-usuario']);
  }
}
