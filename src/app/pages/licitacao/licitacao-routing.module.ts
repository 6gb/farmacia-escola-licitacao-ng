import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FornecimentoComponent } from './fornecimento.component';
import { LicitacaoComponent } from './licitacao.component';

const routes: Routes = [
  {
    path: '',
    component: LicitacaoComponent
  },
  {
    path: ':id',
    component: FornecimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicitacaoRoutingModule { }
