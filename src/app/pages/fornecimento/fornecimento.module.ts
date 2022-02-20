import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FornecimentoComponent } from "./fornecimento.component";
import { FornecimentoRoutingModule } from "./fornecimento-routing.module";

@NgModule({
  declarations: [
    FornecimentoComponent
  ],
  imports: [
    CommonModule,
    FornecimentoRoutingModule,
    FormsModule
  ],
  exports: [
    FornecimentoComponent
  ]
})
export class FornecimentoModule { }
