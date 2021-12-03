import {Roupa} from './roupa'

export class ItemVenda {

  roupa?: Roupa = new Roupa();
  quantidadeVendida?: number;
  precoVendido?: number;

  constructor(roupa?: Roupa, quantidadeVendida?: number, precoVendido?: number) {
    this.roupa = roupa;
    this.quantidadeVendida = quantidadeVendida;
    this.precoVendido = precoVendido;

  }
}
