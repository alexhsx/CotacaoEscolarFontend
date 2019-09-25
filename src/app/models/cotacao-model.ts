import { EncontradoModel } from './encontrado-model';
import { NaoEncontradoModel } from './nao-encontrado-model';

export class CotacaoModel {
  encontrados: Array<EncontradoModel>;
  naoEncontrados: Array<NaoEncontradoModel>;
  nome: string;
  total: Number;
}