import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() imageUrl: string = '';
  @Input() altText: string = 'Placeholder image';
  @Input() link: string = '#';
  @Input() linkText: string = '';
}
