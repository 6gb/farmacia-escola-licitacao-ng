import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecimentoComponent } from './fornecimento.component';

const routes: Routes = [
  {
    path: '',
    component: FornecimentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecimentoRoutingModule { }
