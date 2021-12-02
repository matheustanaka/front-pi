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
    this.clienteService.inserir(this.clienteEdicao).subscribe(() => {
      this.listarClientes();
      this.cancelar();
    })
  }

  novoCliente() {
    this.clienteEdicao = new Cliente();
  }

  cancelar() {
    this.clienteEdicao = undefined;
  }
}
