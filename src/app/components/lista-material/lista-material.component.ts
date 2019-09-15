import { Component, Input } from '@angular/core';
import { ItemModel } from 'src/app/models/item-model';

@Component({
  selector: 'lista-material',
  templateUrl: './lista-material.component.html',
  styleUrls: ['./lista-material.component.css']
})
export class ListaMaterialComponent {
  @Input() materias:Array<ItemModel>;
}
