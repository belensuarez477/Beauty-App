import { Routes } from '@angular/router';
import { Home } from './home/home';
import { InicioSesion } from './formularios/inicio-sesion/inicio-sesion';
import { Registrarse } from './formularios/registrarse/registrarse';
import { Contactanos } from './formularios/contactanos/contactanos';
import { Home } from './home/home';

export const routes: Routes = [
 4-diseño-y-creacion-del-homepage
  { path: "", component: Home },

  { path: "", component: Home },  
 main
  { path: "inicio-sesion", component: InicioSesion },
  { path: "registrarse", component: Registrarse },
  { path: "contactanos", component: Contactanos }
];
