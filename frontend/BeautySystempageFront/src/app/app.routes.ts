import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard";;
import { PrivateLayout } from "./layouts/private-layout/private-layout";
import { PublicLayout } from "./layouts/public-layout/public-layout";
import { Home } from "./home/home";
import { InicioSesion } from "./formularios/inicio-sesion/inicio-sesion";
import { Registrarse } from "./formularios/registrarse/registrarse";
import { Contactanos } from "./formularios/contactanos/contactanos";
import { SeleccionFechaHoraComponent } from "./turnos/seleccion-fechahora/seleccion-fechahora";
import { TurnosService } from "../app/services/turnos-service/turnos-service";

export const routes: Routes = [

  // Públicas
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Home },
      { path: 'inicio-sesion', component: InicioSesion },
      { path: 'registrarse', component: Registrarse },
      { path: 'contactanos', component: Contactanos }
    ]
  },

  // Privadas
  {
    path: 'perfil-usuario',
    component: PrivateLayout,
    children: [
      { path: 'dashboard', component: Dashboard },

      { path: 'turnos/seleccionar', component: SeleccionFechaHoraComponent },
      { path: 'turnos/nuevo', component: TurnosService },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];
