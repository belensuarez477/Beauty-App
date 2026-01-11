import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TurnosService } from './turnos-service';

describe('TurnosService', () => {
  let component: TurnosService;
  let fixture: ComponentFixture<TurnosService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnosService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnosService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
