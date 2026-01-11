import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Dashboard } from './dashboard';
import { NavbarPerfilUsuario } from '../component/navbar/navbar';
import { ServicesSummary } from '../services-summary/services-summary';
import { GestionTurnos } from '../gestion-turnos/gestion-turnos';

describe('Dashboard', () => {
  let component: Dashboard;
  let fixture: ComponentFixture<Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Dashboard,
        NavbarPerfilUsuario,
        ServicesSummary,
        GestionTurnos
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
