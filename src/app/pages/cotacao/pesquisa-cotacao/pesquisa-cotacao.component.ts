import { Component, OnInit } from '@angular/core';
import { EscolaModel } from 'src/app/models/escola-model';
import { EscolaApiService } from 'src/app/services/api/escola-api.service';
import { ItemModel } from 'src/app/models/item-model';
import { CotarModel } from 'src/app/models/cotar-model';
import { CotacaoModel } from 'src/app/models/cotacao-model';
import { MatDialog } from '@angular/material/dialog';
import { NovoGenModalComponent } from 'src/app/components/novo-gen-modal/novo-gen-modal.component';
import { SerieApiService } from 'src/app/services/api/serie-api.service';
import { MaterialApiService } from 'src/app/services/api/material-api.service';
import { CotacaoApiService } from 'src/app/services/api/cotacao-api.service';

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

  defaultEscola = new EscolaModel;

  constructor(private escolaApiService: EscolaApiService,
    private serieApiService: SerieApiService,
    private materialApiService: MaterialApiService,
    private cotacaoApiService: CotacaoApiService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.selectedEscola = new EscolaModel;
    this.buscarEscola();
  }

  buscarEscola(escola = null) {
    this.escolaApiService.getEscolas()
      .subscribe(escolaResult => {
        this.escolas = escolaResult;
        this.escolas.sort((a, b) => a.nome.localeCompare(b.nome));
        this.selectedEscola = escola ? escola : this.escolas[0];
        // this.previousSetUp();
        this.buscarSerie();
      });
  }

  previousSetUp() {
    const es = localStorage.getItem('escola');
    const ser = localStorage.getItem('serie');
    if (!es || !ser) {
      this.buscarSerie();
      return;
    }

    this.selectedEscola = JSON.parse(es) as EscolaModel;
    this.selectedSerie = JSON.parse(ser) as number;

    this.buscarMaterial();
  }

  buscarSerie(serie = null) {
    if (!this.selectedEscola) {
      this.series = [];
      return;
    }

    this.serieApiService.getSeries(this.selectedEscola)
      .subscribe(seriesResult => {
        this.series = seriesResult;
        this.selectedSerie = serie ? serie : this.series[0];
        this.buscarMaterial();
      });
  }

  buscarMaterial() {
    this.chamarDetalhe();
    this.materialApiService.getMateriais(this.selectedEscola, this.selectedSerie)
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

    this.cotacaoApiService.getCotacoes(cotar)
      .subscribe(cotacoes => {
        this.cotacoes = cotacoes.resultado;
      });
  }

  selecionarEscola() {
    if (!this.selectedEscola) {
      return;
    } else if (this.selectedEscola == this.defaultEscola) {
      const dialogRef = this.dialog.open(NovoGenModalComponent, {
        width: '500px',
        data: {
          title: 'Deseja inserir uma nova escola?',
          placeHolder: 'Informe o nome da escola',
          text: ''
        }
      });

      dialogRef.afterClosed()
        .subscribe(result => {
          if (!result || result == '') return;
          const novaEscola = new EscolaModel;
          novaEscola.nome = result.text;
          this.escolaApiService.insertEscola(novaEscola).subscribe(r => { this.buscarEscola(novaEscola); });
        });
      return;
    }
    this.buscarSerie();
  }

  selecionarSerie() {
    if (this.selectedSerie == 0) {

      return;
    } else if (this.selectedSerie == -88) {
      const dialogRef = this.dialog.open(NovoGenModalComponent, {
        width: '500px',
        data: {
          title: 'Deseja inserir uma nova série?',
          placeHolder: 'Informe a série',
          text: ''
        }
      });

      dialogRef.afterClosed()
        .subscribe(result => {
          if (!result || result == '') return;
          this.serieApiService.insertSerie(this.selectedEscola, result.text).subscribe(r => { this.buscarSerie(result.text); });
        });
      return;
    }
    this.buscarMaterial();
  }

  chamarDetalhe() {
    localStorage.setItem('escola', JSON.stringify(this.selectedEscola));
    localStorage.setItem('serie', JSON.stringify(this.selectedSerie));
  }

}
