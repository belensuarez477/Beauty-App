import { CommonModule } from '@angular/common';
import { Component, signal, HostListener } from '@angular/core';
import { Router, RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbarPerfilUsuario',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './navbarPerfilUsuario.html',
  styleUrl: './navbarPerfilUsuario.css',
})
export class NavbarPerfilUsuario {

  menuAbierto = signal(false);

  constructor(private router: Router) {
    // 🔹 Cerrar menú al cambiar de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.menuAbierto.set(false);
      });
  }

  toggleMenu() {
    this.menuAbierto.set(!this.menuAbierto());
  }

  cerrarSesion() {
    localStorage.removeItem('token');
    sessionStorage.clear();
    this.menuAbierto.set(false);
    this.router.navigate(['/']);
  }

  // 🔹 Click en cualquier parte de la pantalla
  @HostListener('document:click')
  cerrarMenuGlobal() {
    this.menuAbierto.set(false);
  }
}
