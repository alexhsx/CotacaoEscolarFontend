import { Component, Input, OnInit } from '@angular/core';
import { CotacaoModel } from 'src/app/models/cotacao-model';

@Component({
  selector: 'lista-cotacao',
  templateUrl: './lista-cotacao.component.html',
  styleUrls: ['./lista-cotacao.component.css']
})
export class ListaCotacaoComponent implements OnInit {
  @Input() cotacao: Array<CotacaoModel>;
  

  ngOnInit(): void {
    
  }
}
