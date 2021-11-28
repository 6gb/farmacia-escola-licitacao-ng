import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { LicitacaoRoutingModule } from './licitacao-routing.module';
import { LicitacaoComponent } from './licitacao.component';

@NgModule({
  declarations: [
    LicitacaoComponent
  ],
  imports: [
    CommonModule,
    LicitacaoRoutingModule,
    FormsModule
  ],
  exports: [
    LicitacaoComponent
  ]
})
export class LicitacaoModule { }
