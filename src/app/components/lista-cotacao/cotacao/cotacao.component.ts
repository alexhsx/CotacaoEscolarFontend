import { Component, Input } from '@angular/core';
import { CotacaoModel } from 'src/app/models/cotacao-model';

@Component({
  selector: 'cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent {
  @Input() cotacao: CotacaoModel;
}
