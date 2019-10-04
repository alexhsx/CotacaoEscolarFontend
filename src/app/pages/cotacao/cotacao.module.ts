import { NgModule } from '@angular/core';
import { PesquisaCotacaoComponent } from './pesquisa-cotacao/pesquisa-cotacao.component';
import { ListaComponentModule } from 'src/app/components/lista-component.module';
import { CotacaoRoutingModule } from './cotacao-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetalheComponent } from './detalhe/detalhe.component';
import { MatButtonModule } from '@angular/material/button';

const comps = [
    PesquisaCotacaoComponent,
    DetalheComponent
];

@NgModule({
    declarations: comps,
    exports: comps,
    imports: [
        ListaComponentModule,
        CotacaoRoutingModule,
        CommonModule,
        MatButtonModule,
        FormsModule
    ]
})
export class CotacaoModule { }
