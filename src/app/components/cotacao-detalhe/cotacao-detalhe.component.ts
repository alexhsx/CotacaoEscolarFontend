import { Component, OnInit } from '@angular/core';
import { EscolaApiService } from 'src/app/services/api/escola-api.service';
import { CotacaoModel } from 'src/app/models/cotacao-model';
import { EncontradoModel } from 'src/app/models/encontrado-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cotacao-detalhe',
  templateUrl: './cotacao-detalhe.component.html',
  styleUrls: ['./cotacao-detalhe.component.css']
})
export class CotacaoDetalheComponent implements OnInit {
  displayedColumns: string[] = ['quantidade', 'descricao', 'valorUnitario', 'valor'];
  dataSource: EncontradoModel[] = [];
  cotacao: CotacaoModel;
  constructor(
    private router: Router) { }

  ngOnInit() {
    const cot = localStorage.getItem('cotacao');
    if (!cot) {
      this.router.navigate(['']);
      return;
    }
    this.cotacao = JSON.parse(cot);
    this.dataSource = this.cotacao.encontrados;
  }

  obterImagem() {
    const image = this.cotacao.logo ? this.cotacao.logo : 'loja1.jpg';
    return 'assets/img/' + image;
  }
}
