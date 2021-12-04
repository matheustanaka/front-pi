import {Roupa} from './roupa'

export class ItemVenda {

  roupa = new Roupa();
  quantidadeVendida?: number;
  precoVendido?: number;

  constructor(quantidadeVendida?: number, precoVendido?: number) {
    this.quantidadeVendida = quantidadeVendida;
    this.precoVendido = precoVendido;

  }
}
