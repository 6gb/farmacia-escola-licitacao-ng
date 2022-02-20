import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LicitacaoRoutingModule } from './licitacao-routing.module';
import { LicitacaoComponent } from './licitacao.component';
import { FornecimentoComponent } from './fornecimento.component';
import { LicitacaoService } from '../../core/service/licitacao.service';
import { FornecedorService } from '../../core/service/fornecedor.service';
import { EmbalagemService } from "../../core/service/embalagem.service"
import { MateriaPrimaService } from "../../core/service/materia-prima.service"

@NgModule({
  declarations: [
    LicitacaoComponent,
    FornecimentoComponent
  ],
  imports: [
    CommonModule,
    LicitacaoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LicitacaoComponent,
    FornecimentoComponent
  ],
  providers: [
    LicitacaoService,
    FornecedorService,
    EmbalagemService,
    MateriaPrimaService
  ]
})
export class LicitacaoModule { }
