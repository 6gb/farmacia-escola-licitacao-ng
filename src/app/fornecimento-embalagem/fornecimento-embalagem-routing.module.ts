import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecimentoEmbalagemComponent } from './fornecimento-embalagem.component';

const routes: Routes = [
  {
    path: '',
    component: FornecimentoEmbalagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecimentoEmbalagemRoutingModule { }
