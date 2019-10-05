import { EscolaModel } from './escola-model';
import { ItemModel } from './item-model';

export class CotarModel {
  escola: EscolaModel;
  itens: Array<ItemModel>;
  serie: number;
}
