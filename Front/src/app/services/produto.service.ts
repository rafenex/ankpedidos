import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BASE_URL } from './config';
import { Cliente, PageEvent, Produto } from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  getAllProdutos(pageable: PageEvent): Observable<any> {
    return this.http
      .get<any>(
        `${BASE_URL}/produtos?page=${pageable.page}&size=${pageable.size}&sort=categoria,asc`
      )
      .pipe(map((response) => response));
  }

  getAllCategorias(): Observable<any[]> {
    return this.http
      .get<any>(`${BASE_URL}/categorias`)
      .pipe(map((response) => response));
  }

  saveProduto(payload: any) {
    this.http.post(`${BASE_URL}/produtos`, payload).subscribe(
      (resultado) => {
        console.log(resultado);
      },
      (erro) => {
        if (erro.status == 400) {
          console.log(erro);
        }
      }
    );
  }
  removeProduto(id: number): Observable<any> {
    return this.http.delete(`${BASE_URL}/produtos/${id}`);
  }
}
