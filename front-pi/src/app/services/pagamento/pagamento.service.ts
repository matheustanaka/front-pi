import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pagamento } from '../../models/pagamento';
const pagamentoLink = 'http://localhost:8080/exemplo-cadastro/webapi/pagamento';
@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(pagamentoLink);
  }

  inserir(pagamento: Pagamento): Observable<void> {
    return this.http.post<void>(pagamentoLink, pagamento);
  }

  atualizar(pagamento: Pagamento): Observable<void> {
    return this.http.put<void>(pagamentoLink, pagamento);
  }

  excluir(id: number): Observable<void> {
    let parametro = new HttpParams;
    parametro = parametro.append('id', id);
    return this.http.delete<void>(pagamentoLink, {params: parametro});
  }
}
