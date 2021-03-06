import { Component, OnInit } from '@angular/core';
import { Roupa } from 'src/app/models/roupa';
import { RoupaService } from 'src/app/services/roupa/roupa.service';
@Component({
  selector: 'app-roupa',
  templateUrl: './roupa.component.html',
  styleUrls: ['./roupa.component.css']
})
export class RoupaComponent implements OnInit {
  roupas = new Array<Roupa>();

  roupaEdicao?: Roupa = undefined;

  estaEditando = false;

  constructor(private roupaService: RoupaService) { }

  ngOnInit(): void {
  //  this.listarRoupas();
  }

  listarRoupas(): void {
    this.roupaService.listar().subscribe(roupas => {
      this.roupas = roupas;
    })
  }

  salvar(): void {
    if(this.roupaEdicao == undefined) {
      return
    }
    if(!this.estaEditando){
      this.roupaService.inserir(this.roupaEdicao).subscribe(() => {
        this.listarRoupas();
        this.cancelar();
      })
    } else {
      this.roupaService.atualizar(this.roupaEdicao).subscribe(()=> {
        this.listarRoupas();
        this.cancelar();
      })
    }
  }

  novaRoupa() {
    this.roupaEdicao = new Roupa();
    this.estaEditando = false;
  }

  cancelar() {
    this.roupaEdicao = undefined;
    this.estaEditando = false;
  }

  selecionarRoupa(roupa: Roupa) {
    this.roupaEdicao = roupa;
    this.estaEditando = true;
  }

  excluir(roupa: Roupa) {
    const resposta = confirm(`${roupa.tipoRoupa} da ${roupa.marca} foi excluído`);
    if(resposta && roupa && roupa.id) {
      this.roupaService.excluir(roupa.id).subscribe(() => {
        this.listarRoupas();
      })
    }
  }
}
