import { Component, Injectable } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { GestionTurnos } from "../../gestion-turnos/gestion-turnos";
import { SeleccionFechaHoraComponent } from "../../turnos/seleccion-fechahora/seleccion-fechahora";
import { Dashboard } from "../../dashboard/dashboard";
import { QuickActions } from "../../quick-actions/quick-actions";
import { GestionServicios } from "../../gestion-servicios/gestion-servicios";
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './turnos-service.html',
  styleUrls: ['./turnos-service.css']
})
@Injectable({
  providedIn: 'root'
})
export class TurnosService {

  private fechaSeleccionada: Date | null = null;
  private horaSeleccionada: string | null = null;

  setFechaHora(fecha: Date, hora: string) {
    this.fechaSeleccionada = fecha;
    this.horaSeleccionada = hora;
  }

  getFechaHora() {
    return {
      fecha: this.fechaSeleccionada,
      hora: this.horaSeleccionada
    };
  }
}
