import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-inicio-sesion',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './inicio-sesion.html'
})
export class InicioSesion {
  usuario = '';
  password = '';
  toastVisible = false;
  toastMessage = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    if (!this.usuario || !this.password) {
      this.toastMessage = 'Completa todos los campos';
      this.toastVisible = true;
      return;
    }

    // Simulación de login correcto
    this.router.navigate(['/perfil-usuario']);
  }
}
