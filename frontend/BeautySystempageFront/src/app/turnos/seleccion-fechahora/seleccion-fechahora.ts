import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccion-fecha-hora',
  standalone: true,
  imports: [],
  templateUrl: './seleccion-fechahora.html',
  styleUrls: ['./seleccion-fechahora.css'],
})
export class SeleccionFechaHoraComponent {

  fechaSeleccionada: Date | null = null;
  horaSeleccionada: number | null = null;

  horasDisponibles: number[] = [
    8, 8.5, 9, 9.5, 10, 10.5,
    11, 11.5, 12, 12.5,
    13, 13.5, 14, 14.5,
    15, 15.5, 16, 16.5,
    17, 17.5, 18, 18.5
  ];
  turnosService: any;
  router: any;

 

  seleccionarHora(hora: number) {
    this.horaSeleccionada = hora;
  }

  seleccionarFecha(fecha: Date) {
    this.fechaSeleccionada = fecha;
  }

  continuar() {
    if (!this.fechaSeleccionada || !this.horaSeleccionada) return;

    this.turnosService.setFechaHora(
      this.fechaSeleccionada,
      this.horaSeleccionada.toString()
    );

    this.router.navigate(['/perfil-usuario/turnos/nuevo']);
  }
}
