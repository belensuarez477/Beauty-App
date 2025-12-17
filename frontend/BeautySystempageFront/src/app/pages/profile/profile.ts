import { Component } from '@angular/core';
import { NavbarPerfilUsuario } from "../../component/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-profile',
 standalone: true,
  imports: [RouterOutlet, NavbarPerfilUsuario, Footer],
  templateUrl: './profile.html',
  styleUrl: './profile.css',  
})
export class Profile {
  mensajeBienvenida = 'Hola';
  nombreUsuario = '';

  ngOnInit() {
    // Obtener nombre del usuario / estética
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || 'Usuario';

    const registroExitoso = localStorage.getItem('registroExitoso');
    if (registroExitoso === 'true') {
      this.mensajeBienvenida = `Registro exitoso ✅ Bienvenido/a ${this.nombreUsuario}`;
      localStorage.removeItem('registroExitoso');
      return;
    }

    const loginExitoso = localStorage.getItem('loginExitoso');
    if (loginExitoso === 'true') {
      this.mensajeBienvenida = `Inicio de sesión exitoso ✅ Bienvenido/a ${this.nombreUsuario}`;
      localStorage.removeItem('loginExitoso');
      return;
    }

    // Mensaje por defecto (cuando ya está logueado)
    this.mensajeBienvenida = `Hola ${this.nombreUsuario}`;
  }
}
