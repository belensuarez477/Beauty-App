import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
export interface User {
  id: string;
  name: string;
  email: string;
  password: string; }

@Injectable({
  providedIn: 'root',
})
export class Autenticacion {
    private STORAGE_USERS_KEY = 'estetica_users';
  private STORAGE_TOKEN_KEY = 'estetica_token';
  constructor(private router: Router) {}

  // Obtener todos los usuarios del localStorage
  private getAllUsers(): User[] {
    const raw = localStorage.getItem(this.STORAGE_USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  // Guardar lista de usuarios
  private saveAllUsers(users: User[]) {
    localStorage.setItem(this.STORAGE_USERS_KEY, JSON.stringify(users));
  }

  // Registrar nuevo usuario (retorna true si ok, false si email ya existe)
  register(user: { name: string; email: string; password: string }): boolean {
    const users = this.getAllUsers();
    const exists = users.some(u => u.email.toLowerCase() === user.email.toLowerCase());
    if (exists) return false;
    const newUser: User = {
      id: Date.now().toString(),
      name: user.name,
      email: user.email,
      password: user.password
    };
    users.push(newUser);
    this.saveAllUsers(users);
    return true;
  }

  // Login: compara email y contraseña. Si ok, guarda "token" simple y retorna true
  login(email: string, password: string): boolean {
    const users = this.getAllUsers();
    const found = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!found) return false;
    // token simple: podés guardar el id del usuario
    const token = JSON.stringify({ userId: found.id, loggedAt: new Date().toISOString() });
    localStorage.setItem(this.STORAGE_TOKEN_KEY, token);
    return true;
  }

  // Logout
  logout() {
    localStorage.removeItem(this.STORAGE_TOKEN_KEY);
    this.router.navigate(['/login']);
  }

  // Devuelve el usuario actual si hay token
  currentUser(): User | null {
    const token = localStorage.getItem(this.STORAGE_TOKEN_KEY);
    if (!token) return null;
    try {
      const parsed = JSON.parse(token);
      const users = this.getAllUsers();
      return users.find(u => u.id === parsed.userId) || null;
    } catch {
      return null;
    }
  }

  // Chequeo si está autenticado
  isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }
  
}
