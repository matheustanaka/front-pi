export class Roupa {

  id_roupa?: number;
  tipoRoupa?: string;
  marca?: string;
  tamanho?: string;
  preco?: number;
  estoque?: number;


  constructor (id_roupa?: number, tipoRoupa?: string, marca?: string, tamanho?: string, preco?: number, estoque?: number) {
    this.id_roupa = id_roupa;
    this.tipoRoupa = tipoRoupa;
    this.marca = marca;
    this.tamanho = tamanho;
    this.preco = preco;
    this.estoque = estoque;
  }

}
