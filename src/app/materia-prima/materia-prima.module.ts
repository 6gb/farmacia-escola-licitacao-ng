import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MateriaPrimaComponent } from './materia-prima.component';
import { MateriaPrimaRoutingModule } from "./materia-prima-routing.module";

@NgModule({
  declarations: [
    MateriaPrimaComponent
  ],
  imports: [
    CommonModule,
    MateriaPrimaRoutingModule,
    FormsModule
  ],
  exports: [
    MateriaPrimaComponent
  ]
})
export class MateriaPrimaModule { }
