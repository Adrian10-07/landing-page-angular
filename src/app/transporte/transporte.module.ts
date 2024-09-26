import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../ciudades/cards/cards.component';
import { TransporteComponent } from './transporte/transporte.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardsComponent,
    TransporteComponent
  ],
  exports:[
    TransporteComponent
  ]
})
export class TransporteModule { }
