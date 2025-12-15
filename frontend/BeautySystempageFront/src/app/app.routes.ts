import { Routes } from "@angular/router"; 
import { Contactanos } from "./formularios/contactanos/contactanos";
import { InicioSesion } from "./formularios/inicio-sesion/inicio-sesion";
import { Registrarse } from "./formularios/registrarse/registrarse";
import { GestionServicios } from "./gestion-servicios/gestion-servicios";
import { GestionTurnos } from "./gestion-turnos/gestion-turnos";
import { Home } from "./home/home";
import { PrivateLayout } from "./layouts/private-layout/private-layout";
import { PublicLayout } from "./layouts/public-layout/public-layout";
import { Dashboard } from "./dashboard/dashboard";

export const routes: Routes = [
  // Rutas públicas
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'inicio-sesion', component: InicioSesion },
      { path: 'registrarse', component: Registrarse },
      { path: 'contactanos', component: Contactanos },
    ]
  },

  // Rutas privadas (perfil del usuario)
  {
    path: 'perfil-usuario',
    component: PrivateLayout,
    children: [
      { path: '', component: Dashboard }, // dashboard principal
      { path: 'turnero', component: GestionTurnos },
      { path: 'gestion-servicios', component: GestionServicios }
    ]
  }
];
