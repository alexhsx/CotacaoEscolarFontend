import { NgModule } from '@angular/core';
import { ListaMaterialComponent } from './lista-material/lista-material.component';
import { ListaCotacaoComponent } from './lista-cotacao/lista-cotacao.component';
import { CotacaoComponent } from './lista-cotacao/cotacao/cotacao.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { NovoMaterialModalComponent } from './novo-material-modal/novo-material-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CotacaoDetalheComponent } from './cotacao-detalhe/cotacao-detalhe.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { NovoGenModalComponent } from './novo-gen-modal/novo-gen-modal.component';

const comps = [
  ListaMaterialComponent,
  ListaCotacaoComponent,
  CotacaoComponent,
  NovoMaterialModalComponent,
  NovoGenModalComponent,
  CotacaoDetalheComponent
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    RouterModule,
    MatTableModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ], entryComponents: [NovoMaterialModalComponent, NovoGenModalComponent]
})
export class ListaComponentModule { }
