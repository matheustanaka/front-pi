import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
const clientLink = 'http://localhost:8080/exemplo-cadastro/webapi/cliente';
@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private http: HttpClient) { }



  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(clientLink);
  }

  inserir(cliente: Cliente): Observable<void> {
    return this.http.post<void>(clientLink, cliente);
  }

  atualizar(cliente: Cliente): Observable<void> {
    return this.http.put<void>(clientLink, cliente);
  }

  excluir(id: number): Observable<void> {
    let parametro = new HttpParams;
    parametro = parametro.append('id', id);
    return this.http.delete<void>(clientLink, {params: parametro});
  }
}
