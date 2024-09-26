import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'ciudades', loadChildren: () => import('./ciudades/ciudades.module').then(m => m.CiudadesModule) },
  { path: 'terminales', loadChildren: () => import('./terminales/terminales.module').then(m => m.TerminalesModule) },
  { path: '', redirectTo: 'ciudades', pathMatch: 'full' }, // Redirigir a 'ciudades' al inicio
];
