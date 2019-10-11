import { Component, OnInit } from '@angular/core';
import { EscolaApiService } from 'src/app/services/api/escola-api.service';
import { EncontradoModel } from 'src/app/models/encontrado-model';
import { ProdutoModel } from 'src/app/models/produto-model';
import { MaterialEscolarModel } from 'src/app/models/material-escolar-model';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.css']
})
export class AdicionarProdutoComponent implements OnInit {
  title = 'Adicionar nova cotação';
  displayedColumns: string[] = ['quantidade', 'descricao', 'valorUnitario'];
  dataSource: ProdutoModel[] = [];
  constructor(private escolaApiService: EscolaApiService) { }

  ngOnInit() {
    const localString = localStorage.getItem('material');
    if (localString) {
      const materiais = JSON.parse(localString) as ItemModel[];
      materiais.forEach(m => {
        this.dataSource.push({
          descricao: m.materialEscolar.descricao,
          quantidade: m.quantidade,
          valor: 0
        });
      });
    }
  }

}
