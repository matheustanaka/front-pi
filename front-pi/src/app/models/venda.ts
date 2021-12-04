import {Cliente} from './cliente';
import {Pagamento} from './pagamento';
import { ItemVenda } from './itemVenda';

export class Venda {
  id_venda?: number;
  numero_venda?: number;
  dataVenda?: Date;
  itensVendidos = new Array <ItemVenda>();
  cliente = new Cliente();
  pagamento = new Pagamento();

  constructor(id_venda?: number, numero_venda?: number, dataVenda?: Date) {
    this.id_venda = id_venda;
    this.numero_venda = numero_venda;
    this.dataVenda = dataVenda;
  }
}
