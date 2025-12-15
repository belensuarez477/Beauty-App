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
 mensajeBienvenida = '';

  ngOnInit() {
    const registroExitoso = localStorage.getItem('registroExitoso');
    if (registroExitoso === 'true') {
      this.mensajeBienvenida = 'Registro exitoso ✅ Bienvenido a Beauty System';
      localStorage.removeItem('registroExitoso'); // limpiar flag
    }
     const loginExitoso = localStorage.getItem('loginExitoso');
     if (loginExitoso === 'true') {
    this.mensajeBienvenida = 'Inicio de sesión exitoso ✅ Bienvenido a Beauty System';
    localStorage.removeItem('loginExitoso');
  }
  }
}
