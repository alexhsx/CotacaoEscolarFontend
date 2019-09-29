import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CotacaoModel } from 'src/app/models/cotacao-model';
import { Router } from '@angular/router';

@Component({
  selector: 'cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})
export class CotacaoComponent {
  @Input() cotacao: CotacaoModel;
  @Output() chamarDetalhe = new EventEmitter();

  constructor(private router: Router) { }

  abrirDetalhe() {
    this.chamarDetalhe.emit(); 
    localStorage.setItem('cotacao', JSON.stringify(this.cotacao));
    this.router.navigate(['/cotacao/detalhe']);
  }
}
