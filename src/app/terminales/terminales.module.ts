import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalesComponent } from './terminales/terminales.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: ':ciudad', component: TerminalesComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TerminalesComponent,
    RouterModule.forChild(routes),

  ],
  exports:[
    TerminalesComponent,
    RouterModule,

  ]
})
export class TerminalesModule { }
