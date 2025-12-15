import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbarPerfilUsuario',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './navbarPerfilUsuario.html',
  styleUrl: './navbarPerfilUsuario.css',
})
export class NavbarPerfilUsuario {
 menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logout() {
    // Acá luego irá el AuthService
    localStorage.removeItem('user');
    this.router.navigate(['/inicio-sesion']);
  }
}
