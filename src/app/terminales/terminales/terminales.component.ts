import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../../ciudades/cards/cards.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-terminales',
  standalone: true,
  imports: [
    CardsComponent,
  ],
  templateUrl: './terminales.component.html',
  styleUrl: './terminales.component.css'
})
export class TerminalesComponent implements OnInit{
  
  ciudad: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Obtener el parámetro 'ciudad' de la URL
    this.ciudad = this.route.snapshot.paramMap.get('ciudad')!;
    console.log('Ciudad seleccionada:', this.ciudad);
  }
}
