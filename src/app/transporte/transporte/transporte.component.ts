import { Component } from '@angular/core';
import { CardsComponent } from '../../ciudades/cards/cards.component';

@Component({
  selector: 'app-transporte',
  standalone: true,
  imports: [
    CardsComponent,
    TransporteComponent
  ],
  templateUrl: './transporte.component.html',
  styleUrl: './transporte.component.css'
})
export class TransporteComponent {

}
