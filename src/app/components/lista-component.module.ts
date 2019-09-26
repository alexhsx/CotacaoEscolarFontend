import { NgModule } from '@angular/core';
import { ListaMaterialComponent } from './lista-material/lista-material.component';
import { ListaCotacaoComponent } from './lista-cotacao/lista-cotacao.component';
import { CotacaoComponent } from './lista-cotacao/cotacao/cotacao.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { NovoMaterialModalComponent } from './novo-material-modal/novo-material-modal.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

const comps = [
  ListaMaterialComponent,
  ListaCotacaoComponent,
  CotacaoComponent,
  NovoMaterialModalComponent
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ], entryComponents: [NovoMaterialModalComponent]
})
export class ListaComponentModule { }
