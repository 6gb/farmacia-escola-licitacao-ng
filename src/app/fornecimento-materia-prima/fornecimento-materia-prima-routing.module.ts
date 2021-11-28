import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecimentoMateriaPrimaComponent } from './fornecimento-materia-prima.component';

const routes: Routes = [
  {
    path: '',
    component: FornecimentoMateriaPrimaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FornecimentoMateriaPrimaRoutingModule { }
