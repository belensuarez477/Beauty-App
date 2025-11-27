import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./component/footer/footer";
import { InicioSesion } from "./formularios/inicio-sesion/inicio-sesion";
import { Registrarse } from "./formularios/registrarse/registrarse";
import { Contactanos } from "./formularios/contactanos/contactanos";
import { ComoFunciona } from './como-funciona/como-funciona';

@Component({
  selector: 'app-root',
 4-diseño-y-creacion-del-homepage
  imports: [RouterOutlet, Home, Navbar, Footer, InicioSesion, Registrarse, Contactanos,ComoFunciona],

  imports: [ RouterModule,RouterOutlet, Home, Navbar, Footer, InicioSesion, Registrarse, Contactanos],
 main
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BeautySystempageFront');
}
