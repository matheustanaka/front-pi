import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venda } from '../../models/venda';
const vendaLink = 'http://localhost:8080/exemplo-cadastro/webapi/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }

  relatorio(): Observable<Venda[]> {
    return this.http.get<Venda[]>(vendaLink);
  }

  fazerVenda(venda: Venda): Observable<void> {
    return this.http.post<void>(vendaLink, venda);
  }
}
