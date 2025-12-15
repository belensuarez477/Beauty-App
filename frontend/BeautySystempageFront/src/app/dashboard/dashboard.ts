import { Component } from '@angular/core';
import { NavbarPerfilUsuario } from '../component/navbar/navbar';
import { QuickActions } from '../quick-actions/quick-actions';
import { TodayAppointments } from '../today-appointments/today-appointments';
import { ServicesSummary } from '../services-summary/services-summary';
import { ProfileHeader } from '../component/profile-header/profile-header';
import { Footer } from "../component/footer/footer";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ProfileHeader, QuickActions, TodayAppointments, ServicesSummary, NavbarPerfilUsuario, Footer],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'] 
})
export class Dashboard {

}
