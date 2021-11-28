import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { FornecimentoEmbalagemComponent } from "./fornecimento-embalagem.component";
import { FornecimentoEmbalagemRoutingModule } from "./fornecimento-embalagem-routing.module";

@NgModule({
  declarations: [
    FornecimentoEmbalagemComponent
  ],
  imports: [
    CommonModule,
    FornecimentoEmbalagemRoutingModule,
    FormsModule
  ],
  exports: [
    FornecimentoEmbalagemComponent
  ]
})
export class FornecimentoEmbalagemModule { }
