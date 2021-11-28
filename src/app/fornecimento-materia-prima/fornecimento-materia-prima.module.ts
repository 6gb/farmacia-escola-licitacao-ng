import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FornecimentoMateriaPrimaComponent } from './fornecimento-materia-prima.component';
import { FornecimentoMateriaPrimaRoutingModule } from "./fornecimento-materia-prima-routing.module";

@NgModule({
  declarations: [
    FornecimentoMateriaPrimaComponent
  ],
  imports: [
    CommonModule,
    FornecimentoMateriaPrimaRoutingModule,
    FormsModule
  ],
  exports: [
    FornecimentoMateriaPrimaComponent
  ]
})
export class FornecimentoMateriaPrimaModule { }
