import { Component, OnInit } from '@angular/core';
import { Pagamento } from 'src/app/models/pagamento';
import { PagamentoService } from 'src/app/services/pagamento/pagamento.service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  //importing array
  pagamentos = new Array<Pagamento>();

  pagamentoEdicao?: Pagamento = undefined;

  estaEditando = false;

  constructor(private pagamentoService: PagamentoService) { }

  ngOnInit(): void {
    this.listarPagamento();
  }

  listarPagamento(): void {
    this.pagamentoService.listar().subscribe(pagamentos => {
      this.pagamentos = pagamentos;
    })
  }

  salvar(): void {
    if(this.pagamentoEdicao == undefined) {
      return
    }
    if(!this.estaEditando){
      this.pagamentoService.inserir(this.pagamentoEdicao).subscribe(() => {
        this.listarPagamento();
        this.cancelar();
      })
    } else {
      this.pagamentoService.atualizar(this.pagamentoEdicao).subscribe(()=> {
        this.listarPagamento();
        this.cancelar();
      })
    }
  }

  novoPagamento() {
    this.pagamentoEdicao = new Pagamento();
    this.estaEditando = false;
  }

  cancelar() {
    this.pagamentoEdicao = undefined;
    this.estaEditando = false;
  }

  selecionarPagamento(pagamento: Pagamento) {
    this.pagamentoEdicao = pagamento;
    this.estaEditando = true;
  }

  excluir(pagamento: Pagamento) {
    const resposta = confirm(`O Pagamento ${pagamento.tipoPagamento} foi excluído`);
    if(resposta && pagamento.id_pagamento && pagamento) {
      this.pagamentoService.excluir(pagamento.id_pagamento).subscribe(() => {
        this.listarPagamento();
      })
    }
  }
}
