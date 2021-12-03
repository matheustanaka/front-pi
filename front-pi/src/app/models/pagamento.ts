export class Pagamento {
  id_pagamento?: number;
  tipoPagamento?: string;


  constructor(id_pagamento?: number, tipoPagamento?: string) {
    this.id_pagamento = id_pagamento;
    this.tipoPagamento = tipoPagamento;
  }
}
