import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/models/roupa';
import { ItemVenda } from 'src/app/models/itemVenda';
import { Cliente } from 'src/app/models/cliente';
import { Pagamento } from 'src/app/models/pagamento';
import { Venda } from 'src/app/models/venda';
import { VendaService } from 'src/app/services/venda/venda.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { RoupaService } from 'src/app/services/roupa/roupa.service';
import { PagamentoService } from 'src/app/services/pagamento/pagamento.service';


@Component({
  selector: 'app-fazer-venda',
  templateUrl: './fazer-venda.component.html',
  styleUrls: ['./fazer-venda.component.css']
})
export class FazerVendaComponent implements OnInit {

  vendas = new Array<Venda>();
  venda = new Venda();

  vendaEdicao?: Venda = undefined;
  estaEditando = false;

  clientes = new Array<Cliente>();
  pagamentos = new Array<Pagamento>();
  roupas = new Array<Roupa>();

  roupa = new Roupa();
  quantidadeVendida = 1;


  constructor(private vendaService: VendaService, private clienteService: ClienteService, private roupaService: RoupaService, private pagamentoService: PagamentoService) { }

  ngOnInit(): void {
    this.listarFazerVenda();
  }

  listarFazerVenda(): void {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    })

    this.pagamentoService.listar().subscribe(pagamentos => {
      this.pagamentos = pagamentos;
    })

    this.roupaService.listar().subscribe(roupas => {
      this.roupas = roupas;
    })

    this.vendaService.relatorio().subscribe(vendas => {
      this.vendas = vendas;
    })
  }

  novaVenda() {
    this.vendaEdicao = new Venda();
    this.estaEditando = false;
  }

  selecionarVenda(venda: Venda) {
    this.vendaEdicao = venda;
    this.estaEditando = true;
  }

  adicionarRoupa () {
    let itemVenda = new ItemVenda();
    itemVenda.roupa.id = this.roupa.id;
    itemVenda.roupa.tipoRoupa = this.roupa.tipoRoupa;
    itemVenda.quantidadeVendida = this.quantidadeVendida;
    itemVenda.precoVendido = this.roupa.preco;

    this.venda.itensVendidos.push(itemVenda);
  }

  cancelar() {
    this.vendaEdicao = undefined;
    this.estaEditando = false;
  }

  fazerVenda() {
    this.vendaService.fazerVenda(this.venda).subscribe(() => {
      alert("Venda Efetuada");
    })
  }

}
