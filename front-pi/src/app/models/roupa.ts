export class Roupa {

  id?: number;
  tipoRoupa?: string;
  marca?: string;
  tamanho?: string;
  preco?: number;
  estoque?: number;


  constructor (id?: number, tipoRoupa?: string, marca?: string, tamanho?: string, preco?: number, estoque?: number) {
    this.id = id;
    this.tipoRoupa = tipoRoupa;
    this.marca = marca;
    this.tamanho = tamanho;
    this.preco = preco;
    this.estoque = estoque;
  }

}
