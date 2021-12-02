import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  //importing array
  clientes = new Array<Cliente>();

  clienteEdicao?: Cliente = undefined;

  estaEditando = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void {
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  salvar(): void {
    if(this.clienteEdicao == undefined) {
      return
    }
    if(!this.estaEditando){
      this.clienteService.inserir(this.clienteEdicao).subscribe(() => {
        this.listarClientes();
        this.cancelar();
      })
    } else {
      this.listarClientes();
      this.cancelar();
      this.estaEditando = false;
    }
  }

  novoCliente() {
    this.clienteEdicao = new Cliente();
    this.estaEditando = false;
  }

  cancelar() {
    this.clienteEdicao = undefined;
    this.estaEditando = false;
  }

  selecionarCliente(cliente: Cliente) {
    this.clienteEdicao = cliente;
    this.estaEditando = true;
  }

  excluir(cliente: Cliente) {
    const resposta = confirm(`O Cliente ${cliente.nome} foi excluído`);
    if(resposta && cliente.id && cliente) {
      this.clienteService.excluir(cliente.id).subscribe(() => {
        this.listarClientes();
      })
    }
  }
}
