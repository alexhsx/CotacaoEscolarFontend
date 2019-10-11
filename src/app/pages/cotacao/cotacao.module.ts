import { NgModule } from '@angular/core';
import { PesquisaCotacaoComponent } from './pesquisa-cotacao/pesquisa-cotacao.component';
import { ListaComponentModule } from 'src/app/components/lista-component.module';
import { CotacaoRoutingModule } from './cotacao-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalheComponent } from './detalhe/detalhe.component';
import { MatButtonModule } from '@angular/material/button';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

const comps = [
    PesquisaCotacaoComponent,
    AdicionarProdutoComponent,
    DetalheComponent
];

@NgModule({
    declarations: comps,
    exports: comps,
    imports: [
        ListaComponentModule,
        CotacaoRoutingModule,
        CommonModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
    ]
})
export class CotacaoModule { }
