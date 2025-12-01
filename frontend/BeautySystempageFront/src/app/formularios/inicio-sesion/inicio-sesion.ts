import { Component, signal, } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.html',
  styleUrl: './inicio-sesion.css',
})
export class InicioSesion {
 toastMessage = signal('');
  toastVisible = signal(false);

  iniciarSesion(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    const usuario = (data.get('usuario') || '').toString().trim();
    const password = (data.get('password') || '').toString();

    if (!usuario || !password) {
      return this.showToast('Completa todos los campos ❌');
    }

    // Recuperar usuario guardado en localStorage
    const userData = localStorage.getItem('user');
    if (!userData) {
      return this.showToast('No existe un usuario registrado ❌');
    }

    const user = JSON.parse(userData);

    if (usuario !== user.usuario || password !== user.password) {
      return this.showToast('Usuario o contraseña incorrectos ❌');
    }

    // Inicio de sesión exitoso
    localStorage.setItem('loginExitoso', 'true'); // 👈 flag para mostrar mensaje en perfil
    this.showToast('Inicio de sesión exitoso ✅');

    // Abrir nueva pestaña en perfil
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
