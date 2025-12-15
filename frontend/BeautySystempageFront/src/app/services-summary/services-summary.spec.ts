import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSummary } from './services-summary';

describe('ServicesSummary', () => {
  let component: ServicesSummary;
  let fixture: ComponentFixture<ServicesSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
