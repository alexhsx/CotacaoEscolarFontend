import { Component, OnInit } from '@angular/core';
import { EscolaApiService } from 'src/app/services/api/escola-api.service';

@Component({
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  title = 'Pesquisar Cotação';

  constructor(private escolaApiService: EscolaApiService) { }

  ngOnInit() {

  }

}
