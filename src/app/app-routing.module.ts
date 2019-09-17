import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cotacao', loadChildren: () => import('./pages/cotacao/cotacao.module').then(m => m.CotacaoModule) },
  {
    path: '',
    redirectTo: 'cotacao',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }