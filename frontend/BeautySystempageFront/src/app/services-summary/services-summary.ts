import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-summary.html',
  styleUrl: './services-summary.css',
})
export class ServicesSummary {
services = ['Depilación', 'Limpieza facial', 'Masajes'];
}
