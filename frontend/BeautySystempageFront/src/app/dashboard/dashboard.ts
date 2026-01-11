import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuickActions } from '../quick-actions/quick-actions';
import { TurnosService } from '../services/turnos-service/turnos-service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    QuickActions
],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  mostrarCalendario = false;

  constructor(private router: Router) {}

  abrirCalendario() {
    this.mostrarCalendario = true;
  }

  cerrarCalendario() {
    this.mostrarCalendario = false;
  }

  irAGestionTurno(fecha: string) {
    this.mostrarCalendario = false;
    this.router.navigate(['/perfil-usuario/turnero', fecha]);
  }
}
