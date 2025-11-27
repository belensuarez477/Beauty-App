import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  @Input() title: string = 'Gestión de Turnos y Servicios para Estéticas';
  @Input() description: string = 'Optimiza tu centro de belleza con nuestra herramienta de gestión integral. Ahorra tiempo y mejora la experiencia de tus clientes.';
  @Input() buttonText: string = 'Comenzar Ahora';
  @Input() buttonLink: string = '/registrarse';
}
