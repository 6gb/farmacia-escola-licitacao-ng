import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LicitacaoModule } from "./licitacao/licitacao.module";
import { FornecedorModule } from "./fornecedor/fornecedor.module";
import { EmbalagemModule } from "./embalagem/embalagem.module";
import { MateriaPrimaModule } from "./materia-prima/materia-prima.module";
import { FornecimentoEmbalagemModule } from "./fornecimento-embalagem/fornecimento-embalagem.module";
import { FornecimentoMateriaPrimaModule } from "./fornecimento-materia-prima/fornecimento-materia-prima.module";
import { AppRoutingModule } from "./app-routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LicitacaoModule,
    FornecedorModule,
    EmbalagemModule,
    MateriaPrimaModule,
    FornecimentoEmbalagemModule,
    FornecimentoMateriaPrimaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
