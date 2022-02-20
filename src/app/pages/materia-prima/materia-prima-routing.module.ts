import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriaPrimaComponent } from './materia-prima.component';

const routes: Routes = [
  {
    path: '',
    component: MateriaPrimaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriaPrimaRoutingModule { }
