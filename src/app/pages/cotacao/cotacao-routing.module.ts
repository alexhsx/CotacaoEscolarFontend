import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesquisaCotacaoComponent } from './pesquisa-cotacao/pesquisa-cotacao.component';
import { DetalheComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  { path: '', component: PesquisaCotacaoComponent },
  { path: 'detalhe', component: DetalheComponent },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CotacaoRoutingModule { }