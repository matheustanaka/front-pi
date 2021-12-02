import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/exemplo-cadastro/webapi/cliente');
  }

  inserir(cliente: Cliente): Observable<void> {
    return this.http.post<void>('http://localhost:8080/exemplo-cadastro/webapi/cliente', cliente);
  }

}
