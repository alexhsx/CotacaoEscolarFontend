import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';
import { MatDialog } from '@angular/material/dialog';
import { NovoMaterialModalComponent } from '../novo-material-modal/novo-material-modal.component';
import { MaterialEscolarModel } from 'src/app/models/material-escolar-model';

@Component({
  selector: 'app-lista-material',
  templateUrl: './lista-material.component.html',
  styleUrls: ['./lista-material.component.css']
})
export class ListaMaterialComponent {
  @Input() materias: Array<ItemModel>;
  @Output() materialRemovido = new EventEmitter<ItemModel>();
  @Output() materialAdicionado = new EventEmitter<ItemModel>();
  novoMaterial: ItemModel;

  constructor(public dialog: MatDialog) {

  }

  removerMaterial(index: number, item: ItemModel) {
    if (index !== -1) {
      this.materias.splice(index, 1);
      item.quantidade = 0;
      this.materialRemovido.emit(item);
    }
  }

  adicionarMaterial() {
    this.novoMaterial = new ItemModel();
    this.novoMaterial.materialEscolar = new MaterialEscolarModel();
    const dialogRef = this.dialog.open(NovoMaterialModalComponent, {
      width: '500px',
      data: this.novoMaterial
    });

    dialogRef.afterClosed().subscribe(result => {
      this.novoMaterial = result;
      if (this.novoMaterial &&
        this.novoMaterial.materialEscolar.descricao &&
        this.novoMaterial.quantidade > 0) {
        const existenteMate = this.materias.find(m => m.materialEscolar.descricao === this.novoMaterial.materialEscolar.descricao);
        if (existenteMate) {
          existenteMate.quantidade = this.novoMaterial.quantidade;
          this.materialRemovido.emit(this.novoMaterial);
        } else {
          this.materias.push(this.novoMaterial);
          this.materialAdicionado.emit(this.novoMaterial);
        }
      }
    });
  }
}
