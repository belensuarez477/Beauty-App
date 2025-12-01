import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Input() title: string = 'Gestión de Turnos y Servicios para Estéticas';
  @Input() description: string = 'Optimiza tu centro de belleza con nuestra herramienta de gestión integral. Ahorra tiempo y mejora la experiencia de tus clientes.';
  @Input() buttonText: string = 'Comenzar Ahora';
  @Input() buttonLink: string = '/registrarse';
}
