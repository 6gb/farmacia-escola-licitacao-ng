import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'licitacao',
    loadChildren: () => import('./licitacao/licitacao.module').then(m => m.LicitacaoModule)
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('./fornecedor/fornecedor.module').then(m => m.FornecedorModule)
  },
  {
    path: 'materia-prima',
    loadChildren: () => import('./materia-prima/materia-prima.module').then(m => m.MateriaPrimaModule)
  },
  {
    path: 'embalagem',
    loadChildren: () => import('./embalagem/embalagem.module').then(m => m.EmbalagemModule)
  },
  {
    path: 'fornecimento-materia-prima',
    loadChildren: () => import('./fornecimento-materia-prima/fornecimento-materia-prima.module').then(m => m.FornecimentoMateriaPrimaModule)
  },
  {
    path: 'fornecimento-embalagem',
    loadChildren: () => import('./fornecimento-embalagem/fornecimento-embalagem.module').then(m => m.FornecimentoEmbalagemModule)
  },
  {
    path: '',
    redirectTo: 'licitacao',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
