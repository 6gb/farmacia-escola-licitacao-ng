import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from "./core/service/auth-guard.service"

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'licitacao',
    loadChildren: () => import('./pages/licitacao/licitacao.module').then(m => m.LicitacaoModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('./pages/fornecedor/fornecedor.module').then(m => m.FornecedorModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'materia-prima',
    loadChildren: () => import('./pages/materia-prima/materia-prima.module').then(m => m.MateriaPrimaModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'embalagem',
    loadChildren: () => import('./pages/embalagem/embalagem.module').then(m => m.EmbalagemModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'fornecimento',
    loadChildren: () => import('./pages/fornecimento/fornecimento.module').then(m => m.FornecimentoModule),
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
