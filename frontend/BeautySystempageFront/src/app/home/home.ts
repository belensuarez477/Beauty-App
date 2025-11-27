import { Component } from '@angular/core';
import { InicioSesion } from '../formularios/inicio-sesion/inicio-sesion';
import { Registrarse } from '../formularios/registrarse/registrarse';
import { Contactanos } from '../formularios/contactanos/contactanos';
import { Hero } from "../hero/hero";
import { ComoFunciona } from "../como-funciona/como-funciona";
import { RouterOutlet } from '@angular/router';
import { Beneficios } from "../beneficios/beneficios";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, InicioSesion, Registrarse, Contactanos, Hero, ComoFunciona, Beneficios],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
