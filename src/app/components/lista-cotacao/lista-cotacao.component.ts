import { Component, Input } from '@angular/core';
import { CotacaoModel } from 'src/app/models/cotacao-model';

@Component({
  selector: 'lista-cotacao',
  templateUrl: './lista-cotacao.component.html',
  styleUrls: ['./lista-cotacao.component.css']
})
export class ListaCotacaoComponent {
  @Input() cotacao: Array<CotacaoModel>;
}
