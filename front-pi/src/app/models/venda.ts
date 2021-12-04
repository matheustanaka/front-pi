import {Cliente} from './cliente';
import {Pagamento} from './pagamento';
import { ItemVenda } from './itemVenda';

export class Venda {
  id_venda?: number;
  numero_venda?: number;
  dataVenda?: Date;
  itemVenda?: ItemVenda[];
  cliente?: Cliente = new Cliente();
  pagamento?: Pagamento = new Pagamento();

  constructor(id_venda?: number, numero_venda?: number, dataVenda?: Date, itemVenda?: ItemVenda[], cliente?: Cliente, pagamento?: Pagamento) {
    this.id_venda = id_venda;
    this.numero_venda = numero_venda;
    this.dataVenda = dataVenda;
    this.itemVenda = itemVenda;
    this.cliente = cliente;
    this.pagamento = pagamento;
  }
}
