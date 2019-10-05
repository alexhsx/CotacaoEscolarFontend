import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CotacaoModel } from 'src/app/models/cotacao-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotacao',
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
    const link = this.cotacao.detalheLink ? this.cotacao.detalheLink : '/cotacao/detalhe';
    this.router.navigate([link]);
  }

  obterImagem() {
    return this.cotacao.logoPath ? this.cotacao.logoPath : 'assets/img/loja1.jpg';
  }
}
