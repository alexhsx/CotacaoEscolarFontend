import { NgModule } from '@angular/core';
import { ListaMaterialComponent } from './lista-material/lista-material.component';
import { ListaCotacaoComponent } from './lista-cotacao/lista-cotacao.component';
import { CotacaoComponent } from './lista-cotacao/cotacao/cotacao.component';
import { CommonModule } from '@angular/common';

const comps = [
  ListaMaterialComponent,
  ListaCotacaoComponent,
  CotacaoComponent
];

@NgModule({
  declarations: comps,
  exports:comps,
  imports: [
    CommonModule
  ]
})
export class ListaComponentModule { }
