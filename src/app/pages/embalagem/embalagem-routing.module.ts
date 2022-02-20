import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbalagemComponent } from './embalagem.component';

const routes: Routes = [
  {
    path: '',
    component: EmbalagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmbalagemRoutingModule { }
