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

  defaultEscola = new EscolaModel();

  constructor(private escolaApiService: EscolaApiService,
    // tslint:disable-next-line:align
    private serieApiService: SerieApiService,
    // tslint:disable-next-line:align
    private materialApiService: MaterialApiService,
    // tslint:disable-next-line:align
    private cotacaoApiService: CotacaoApiService,
    // tslint:disable-next-line:align
    public dialog: MatDialog) { }

  ngOnInit() {

    this.selectedEscola = new EscolaModel();
    this.buscarEscola();
  }

  buscarEscola(escola: EscolaModel = null) {
    this.escolaApiService.getEscolas()
      .subscribe(escolaResult => {
        this.escolas = escolaResult;
        this.escolas.sort((a, b) => a.nome.localeCompare(b.nome));
        escola = escola ? this.escolas.find(e => e.nome === escola.nome) : null;
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
      this.materias = [];
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
    localStorage.setItem('material', JSON.stringify(this.materias));
    if (!this.selectedEscola || !this.selectedSerie) {
      this.materias = [];
      return;
    }
    this.materialApiService.getMateriais(this.selectedEscola, this.selectedSerie)
      .subscribe(materiaisResult => {
        this.materias = materiaisResult ? materiaisResult : [];
        localStorage.setItem('material', JSON.stringify(this.materias));
        this.buscarCotacoe();
      });
  }

  buscarCotacoe() {
    localStorage.setItem('material', JSON.stringify(this.materias));
    const cotar = new CotarModel();
    cotar.escola = this.selectedEscola;
    cotar.serie = this.selectedSerie;
    cotar.itens = this.materias;
    if (!this.materias || this.materias.length < 1) {
      this.preencherListaCotacao([]);
      return;
    }
    this.materialApiService.inseriNaLista(cotar.escola, cotar.serie, cotar.itens[cotar.itens.length - 1]).subscribe(result => { });

    this.cotacaoApiService.getCotacoes(cotar)
      .subscribe(cotacoes => {
        this.preencherListaCotacao(cotacoes.resultado);
      });
  }

  selecionarEscola() {
    if (!this.selectedEscola) {
      return;
    } else if (this.selectedEscola === this.defaultEscola) {
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
          if (!result || result === '') { return; }
          const novaEscola = new EscolaModel();
          novaEscola.nome = result.text;
          this.escolaApiService.insertEscola(novaEscola).subscribe(r => { this.buscarEscola(novaEscola); });
        });
      return;
    }
    this.buscarSerie();
  }

  preencherListaCotacao(lista: CotacaoModel[]) {
    this.cotacoes = lista;
    lista.forEach(l => l.visivel = l.encontrados.length > 0);
    // const addCotacao = new CotacaoModel();
    // addCotacao.nome = 'Deseja adicionar um novo orçamento? Clique em mim!';
    // addCotacao.encontrados = [];
    // addCotacao.naoEncontrados = [];
    // addCotacao.total = 0;
    // addCotacao.visivel = true;
    // addCotacao.logoPath = 'assets/img/plus.png';
    // addCotacao.detalheLink = '/cotacao/add-produto';

    // this.cotacoes.unshift(addCotacao);
  }

  selecionarSerie() {
    if (this.selectedSerie === 0) {
      return;
    } else if (this.selectedSerie === -88) {
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
          if (!result || result === '') { return; }
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
