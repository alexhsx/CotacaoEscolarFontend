import { Component, OnInit } from '@angular/core';
import { EscolaModel } from 'src/app/models/escola-model';
import { EscolaApiService } from 'src/app/services/api/escola-api.service';
import { ItemModel } from 'src/app/models/item-model';
import { CotarModel } from 'src/app/models/cotar-model';
import { CotacaoModel } from 'src/app/models/cotacao-model';

@Component({
  templateUrl: './pesquisa-cotacao.component.html',
  styleUrls: ['./pesquisa-cotacao.component.css']
})
export class PesquisaCotacaoComponent implements OnInit {
  title = 'Pesquisar Cotação';
  escolas: Array<EscolaModel> = [];
  series: Array<number> = [];
  materias: Array<ItemModel> = [];
  selectedEscola: EscolaModel;
  selectedSerie: number;
  cotacoes: Array<CotacaoModel>;

  constructor(private escolaApiService: EscolaApiService) { }

  ngOnInit() {

    this.selectedEscola = new EscolaModel;
    this.escolaApiService.getEscolas()
      .subscribe(escolaResult => {
        this.escolas = escolaResult;
        this.escolas.sort((a, b) => a.nome.localeCompare(b.nome));
        this.selectedEscola = this.escolas[0];
        this.buscarSerie();
      });
  }

  buscarSerie() {
    if (!this.selectedEscola) {
      this.series = [];
      return;
    }

    this.escolaApiService.getSeries(this.selectedEscola)
      .subscribe(seriesResult => {
        this.series = seriesResult;
        this.selectedSerie = this.series[0];
        this.buscarMaterial();
      });
  }

  buscarMaterial() {
    this.escolaApiService.getMateriais(this.selectedEscola, this.selectedSerie)
      .subscribe(materiaisResult => {
        this.materias = materiaisResult ? materiaisResult : [];
        this.buscarCotacoe();
      });
  }

  buscarCotacoe() {
    const cotar = new CotarModel;
    cotar.escola = this.selectedEscola;
    cotar.serie = this.selectedSerie;
    cotar.itens = this.materias;
    if (!this.materias || this.materias.length < 1) {
      this.cotacoes = [];
      return;
    }

    this.escolaApiService.getCotacoes(cotar)
      .subscribe(cotacoes => {
        this.cotacoes = cotacoes.resultado;
      });
  }
}
