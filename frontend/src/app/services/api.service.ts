import { Injectable } from "@angular/core";
import { enviroment } from "../../enviroments/enviroment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import HttpUtil from "../utils/HttpUtil";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private apiUrl = enviroment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(route: string, queryParams?: any): Observable<T> {
    const params = HttpUtil.getQueryParams(queryParams);
    return this.http.get<T>(this.apiUrl + route + params);
  }

  post<T>(route: string, data: unknown): Observable<T> {
    return this.http.post<T>(this.apiUrl + route, data);
  }

  put<T>(route: string, id?: string | number, data?: unknown): Observable<T> {
    const url = id ? `${this.apiUrl}${route}/${id}` : `${this.apiUrl}${route}`;
    return this.http.put<T>(url, data);
  }

  delete(route: string, id: string | number, data?: unknown) {
    return this.http.delete(`${this.apiUrl}${route}/${id}`, { body: data });
  }
}
