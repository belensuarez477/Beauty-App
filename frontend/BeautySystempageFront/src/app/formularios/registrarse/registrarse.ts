import { Component, signal } from '@angular/core';
import { Footer } from "../../component/footer/footer";
import { Navbar } from "../../navbar/navbar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrarse',
  standalone: true,
  imports: [CommonModule, Footer, Navbar],
  templateUrl: './registrarse.html',
  styleUrls: ['./registrarse.css'], // 👈 corregido (plural)
})
export class Registrarse {
  toastMessage = signal('');
  toastVisible = signal(false);

  registrar(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    // Declaración de variables a partir de los inputs del formulario
    const nombre = (data.get('nombre') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const usuario = (data.get('usuario') || '').toString().trim();
    const password = (data.get('password') || '').toString();
    const confirmar = (data.get('confirmar') || '').toString();

    // Validaciones manuales
    if (!nombre || !email || !usuario || !password || !confirmar) {
      return this.showToast('Completa todos los campos ❌');
    }
    if (password.length < 8 || confirmar.length < 8) {
      return this.showToast('La contraseña debe tener al menos 8 caracteres ❌');
    }
    if (password !== confirmar) {
      return this.showToast('Las contraseñas no coinciden ❌');
    }

    // Simulación de guardado
    localStorage.setItem('user', JSON.stringify({ nombre, email, usuario, password }));
    localStorage.setItem('registroExitoso', 'true'); // 👈 flag para mostrar mensaje en perfil

    // Mostrar toast en la pestaña actual
    this.showToast('Registro exitoso ✅');

    // Abrir nueva pestaña en la sección perfil
    window.open('/perfil-usuario', '_blank');
  }

  private showToast(message: string) {
    this.toastMessage.set(message);
    this.toastVisible.set(true);
    setTimeout(() => {
      this.toastVisible.set(false);
      const form = document.querySelector('form') as HTMLFormElement;
      if (form) form.reset();
    }, 3000);
  }
}
