import {Cliente} from './cliente';
import {Pagamento} from './pagamento';
import { ItemVenda } from './itemVenda';
import { Roupa } from './roupa';

export class Venda {
  id_venda?: number;
  numeroVenda?: number;
  dataVenda?: Date;
  itensVendidos = new Array <ItemVenda>();
  cliente = new Cliente();
  pagamento = new Pagamento();
  itemVenda = new ItemVenda();

  constructor(id_venda?: number, numeroVenda?: number, dataVenda?: Date) {
    this.id_venda = id_venda;
    this.numeroVenda = numeroVenda;
    this.dataVenda = dataVenda;
  }
}
