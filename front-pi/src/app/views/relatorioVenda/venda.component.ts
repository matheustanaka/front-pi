import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/models/roupa';
import { ItemVenda } from 'src/app/models/itemVenda';
import { Cliente } from 'src/app/models/cliente';
import { Pagamento } from 'src/app/models/pagamento';
import { Venda } from 'src/app/models/venda';
import { VendaService } from 'src/app/services/venda/venda.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { RoupaService } from 'src/app/services/roupa/roupa.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  vendas = new Array<Venda>();
  venda= new Venda();

  vendaEdicao?: Venda = undefined;
  estaEditando = false;

  dataInicial = new Date();
  dataFinal = new Date();

  constructor(private vendaService: VendaService, private clienteService: ClienteService, private roupaService: RoupaService) {
  }


  ngOnInit(): void {
    this.listarVenda();
  }

  listarVenda(): void {
    this.vendaService.listar(this.dataInicial, this.dataFinal).subscribe(vendas => {
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

  salvar(): void {
    if(this.vendaEdicao== undefined) {
      return
    }
    if(!this.estaEditando){
      this.vendaService.fazerVenda(this.vendaEdicao).subscribe(() => {
        this.listarVenda();
        this.cancelar();
      })
    } else {
      this.vendaService.fazerVenda(this.vendaEdicao).subscribe(()=> {
        this.listarVenda();
        this.cancelar();
      })
    }
  }

  cancelar() {
    this.vendaEdicao = undefined;
    this.estaEditando = false;
  }

}
