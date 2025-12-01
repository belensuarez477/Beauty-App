import { Routes } from '@angular/router';
import { InicioSesion } from './formularios/inicio-sesion/inicio-sesion';
import { Registrarse } from './formularios/registrarse/registrarse';
import { Contactanos } from './formularios/contactanos/contactanos';
import { Home } from './home/home';
import { Profile } from './pages/profile/profile';
import { GestionTurnos } from './gestion-turnos/gestion-turnos';
import { GestionServicios } from './gestion-servicios/gestion-servicios';

export const routes: Routes = [

    {path: '', component: Home},
    {path: 'inicio-sesion', component: InicioSesion},
    {path: 'registrarse', component: Registrarse},
    {path: 'contactanos', component: Contactanos},
    {path: 'perfil-usuario', component: Profile },
    {path: 'turnero', component: GestionTurnos},
    {path: 'gestion-servicios', component: GestionServicios},
    {path: '**', redirectTo: ''}
]
