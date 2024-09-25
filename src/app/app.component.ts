import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CiudadesModule } from './ciudades/ciudades.module';
import { HomeComponent } from "./ciudades/home/home.component";
import { TerminalesComponent } from './terminales/terminales/terminales.component';
import { TerminalesModule } from './terminales/terminales.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CiudadesModule,
    HomeComponent,
    TerminalesComponent,
    TerminalesModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Landing-Page-practica';
}
