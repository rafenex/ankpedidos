import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BASE_URL } from './config';
import { Cliente, Produto } from '../models/api';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  getAllProdutos(): Observable<Produto[]> {
    return this.http
      .get<any>(`${BASE_URL}/produtos`)
      .pipe(map((response) => response.content));
  }
}
