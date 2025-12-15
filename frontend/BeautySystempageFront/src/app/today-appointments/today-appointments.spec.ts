import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayAppointments } from './today-appointments';

describe('TodayAppointments', () => {
  let component: TodayAppointments;
  let fixture: ComponentFixture<TodayAppointments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodayAppointments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayAppointments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
