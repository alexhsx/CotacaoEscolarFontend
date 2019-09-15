import { NgModule } from '@angular/core';
import { PesquisaCotacaoComponent } from './pesquisa-cotacao/pesquisa-cotacao.component';
import { ListaComponentModule } from 'src/app/components/lista-component.module';
import { CotacaoRoutingModule } from './cotacao-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const comps = [
    PesquisaCotacaoComponent
];

@NgModule({
    declarations: comps,
    exports: comps,
    imports: [
        ListaComponentModule,
        CotacaoRoutingModule,
        CommonModule,
        FormsModule      
    ]
})
export class CotacaoModule { }
