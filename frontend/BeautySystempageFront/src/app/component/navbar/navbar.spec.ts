import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarPerfilUsuario } from '../../component/navbar/navbar';

describe('NavbarPerfilUsuario', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPerfilUsuario],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NavbarPerfilUsuario);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
