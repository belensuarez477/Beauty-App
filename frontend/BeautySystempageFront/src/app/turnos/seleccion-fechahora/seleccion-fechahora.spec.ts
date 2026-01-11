import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SeleccionFechaHoraComponent } from '../seleccion-fechahora/seleccion-fechahora'
import { GestionServicios } from '../../gestion-servicios/gestion-servicios';
import{ TurnosService} from '../../services/turnos-service/turnos-service'
import { NavbarPerfilUsuario } from '../../component/navbar/navbar';
import { provideRouter } from '@angular/router';

describe('SeleccionFechaHoraComponent', () => {
  let component: SeleccionFechaHoraComponent;
  let fixture: ComponentFixture<SeleccionFechaHoraComponent>;
  let turnosService: TurnosService;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    router = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [SeleccionFechaHoraComponent],
      providers: [
        TurnosService,
        { provide: Router, useValue: router }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionFechaHoraComponent);
    component = fixture.componentInstance;
    turnosService = TestBed.inject(TurnosService);
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería seleccionar una fecha', () => {
    const fecha = new Date('2026-01-10');
    component.seleccionarFecha(fecha);

    expect(component.fechaSeleccionada).toEqual(fecha);
  });

  it('debería seleccionar una hora', () => {
    component.seleccionarHora(10.5);

    expect(component.horaSeleccionada).toBe(10.5);
  });

  it('debería guardar fecha y hora y navegar al continuar', () => {
    spyOn(turnosService, 'setFechaHora');

    const fecha = new Date('2026-01-10');
    component.seleccionarFecha(fecha);
    component.seleccionarHora(9);

    component.continuar();

    expect(turnosService.setFechaHora).toHaveBeenCalledWith(
      fecha,
      '9'
    );

    expect(router.navigate).toHaveBeenCalledWith([
      '/perfil-usuario/turnos/nuevo'
    ]);
  });
});
