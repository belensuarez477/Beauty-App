import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./home/home";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./component/footer/footer";
import { InicioSesion } from "./formularios/inicio-sesion/inicio-sesion";
import { Registrarse } from "./formularios/registrarse/registrarse";
import { Contactanos } from "./formularios/contactanos/contactanos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, Footer, InicioSesion, Registrarse, Contactanos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BeautySystempageFront');
}
