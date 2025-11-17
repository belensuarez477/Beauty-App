import { Routes } from '@angular/router';
import { Home } from './home/home';
import { InicioSesion } from './formularios/inicio-sesion/inicio-sesion';
import { Registrarse } from './formularios/registrarse/registrarse';
import { Contactanos } from './formularios/contactanos/contactanos';

export const routes: Routes = [
  { path: "", component: Home },  
  { path: "inicio-sesion", component: InicioSesion },
  { path: "registrarse", component: Registrarse },
  { path: "contactanos", component: Contactanos }
];
