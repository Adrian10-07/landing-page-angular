import { Component } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router) {}

  onCardClick(ciudad: string) {
    this.router.navigate(['/terminales', ciudad]);
  }
}
