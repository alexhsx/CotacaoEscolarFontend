import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'lista-material',
  templateUrl: './lista-material.component.html',
  styleUrls: ['./lista-material.component.css']
})
export class ListaMaterialComponent {
  @Input() materias: Array<ItemModel>;

  @Output() materialRemovido = new EventEmitter();

  removerMaterial(index: number) {
    if (index !== -1) {
      this.materias.splice(index, 1);
      this.materialRemovido.emit();
    }
  }
}
