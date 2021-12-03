import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Roupa } from '../models/roupa';

const roupaLink = 'localhost:8080/exemplo-cadastro/webapi/roupas';

@Injectable({
  providedIn: 'root'
})
export class RoupaService {

  constructor( private http: HttpClient ) { }

  listar(): Observable<Roupa[]> {
    return this.http.get<Roupa[]>(roupaLink);
  }

  inserir(roupa: Roupa): Observable<void> {
    return this.http.post<void>(roupaLink, roupa);
  }

  atualizar(roupa: Roupa): Observable<void> {
    return this.http.put<void>(roupaLink, roupa);
  }

  excluir(id: number): Observable<void> {
    let parametro = new HttpParams;
    parametro = parametro.append('id', id);
    return this.http.delete<void>(roupaLink, {params: parametro});
  }
}
