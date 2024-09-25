import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalesComponent } from './terminales/terminales.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TerminalesComponent,
  ],
  exports:[
    TerminalesComponent,
  ]
})
export class TerminalesModule { }
