import { Component } from '@angular/core';
import { CardsComponent } from '../../ciudades/cards/cards.component';

@Component({
  selector: 'app-terminales',
  standalone: true,
  imports: [
    CardsComponent,
  ],
  templateUrl: './terminales.component.html',
  styleUrl: './terminales.component.css'
})
export class TerminalesComponent {

}
