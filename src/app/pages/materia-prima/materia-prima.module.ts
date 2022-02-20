import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MateriaPrimaRoutingModule } from "./materia-prima-routing.module";
import { MateriaPrimaComponent } from './materia-prima.component';
import { MateriaPrimaService } from '../../core/service/materia-prima.service';

@NgModule({
  declarations: [
    MateriaPrimaComponent
  ],
  imports: [
    CommonModule,
    MateriaPrimaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MateriaPrimaComponent
  ],
  providers: [
    MateriaPrimaService
  ]
})
export class MateriaPrimaModule { }
