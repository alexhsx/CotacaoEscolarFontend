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
  @Output() materialRemovido = new EventEmitter();
  novoMaterial: ItemModel;

  constructor(public dialog: MatDialog) {

  }

  removerMaterial(index: number) {
    if (index !== -1) {
      this.materias.splice(index, 1);
      this.materialRemovido.emit();
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
        this.materias.push(this.novoMaterial);
        this.materialRemovido.emit();
      }
    });
  }
}
