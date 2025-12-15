import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-today-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './today-appointments.html',
  styleUrl: './today-appointments.css',
})
export class TodayAppointments {

    appointments = [
    { time: '10:00', client: 'Ana Gómez', service: 'Manicuría', status: 'Confirmado' },
    { time: '11:30', client: 'Laura Pérez', service: 'Limpieza facial', status: 'Pendiente' }
  ];

}
