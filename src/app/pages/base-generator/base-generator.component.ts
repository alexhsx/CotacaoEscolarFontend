import { Component, OnInit } from '@angular/core';
import { EscolaModel } from 'src/app/models/escola-model';
import { EscolaApiService } from 'src/app/services/api/escola-api.service';
import { SerieApiService } from 'src/app/services/api/serie-api.service';
import { MaterialApiService } from 'src/app/services/api/material-api.service';
import { CotacaoApiService } from 'src/app/services/api/cotacao-api.service';

@Component({
    templateUrl: './base-generator.component.html',
    styleUrls: ['./base-generator.component.css']
})
export class BaseGeneratorComponent implements OnInit {
    title = 'Gerador de base';

    defaultEscola = new EscolaModel();

    constructor(private escolaApiService: EscolaApiService,
        // tslint:disable-next-line:align
        private serieApiService: SerieApiService,
        // tslint:disable-next-line:align
        private materialApiService: MaterialApiService,
        // tslint:disable-next-line:align
        private cotacaoApiService: CotacaoApiService,
    ) { }

    ngOnInit() {
        this.criaEscolas();
    }
    // criaEstabelecimento() {
    // }

    criaEscolas() {
        let escola1 = new EscolaModel();
        escola1.nome = 'Alfa';
        this.insertEscola(escola1);
        escola1 = new EscolaModel();
        escola1.nome = 'Beta';
        this.insertEscola(escola1);
        escola1 = new EscolaModel();
        escola1.nome = 'Omega';
        this.insertEscola(escola1);
        escola1 = new EscolaModel();
        escola1.nome = 'Gamma';
        this.insertEscola(escola1);
        escola1 = new EscolaModel();
        escola1.nome = 'Delta';
        this.insertEscola(escola1);
        escola1 = new EscolaModel();
        escola1.nome = 'Iota';
        this.insertEscola(escola1);
    }

    insertEscola(escola: EscolaModel) {
        this.escolaApiService.insertEscola(escola)
            .subscribe(result => {
                this.criaSerie(result);
            });
    }

    criaSerie(escola: EscolaModel) {
        this.insertSerie(escola, 1);
        this.insertSerie(escola, 2);
        this.insertSerie(escola, 3);
        this.insertSerie(escola, 4);
        this.insertSerie(escola, 5);
        this.insertSerie(escola, 6);
    }

    insertSerie(escola: EscolaModel, serie: number) {
        this.serieApiService.insertSerie(escola, serie).subscribe(result => { });
    }


}
