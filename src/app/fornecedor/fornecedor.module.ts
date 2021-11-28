import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FornecedorComponent } from './fornecedor.component';
import { FornecedorRoutingModule } from "./fornecedor-routing.module";

@NgModule({
  declarations: [
    FornecedorComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule
  ],
  exports: [
    FornecedorComponent
  ]
})
export class FornecedorModule { }
