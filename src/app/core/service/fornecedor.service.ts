import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Fornecedor } from "../model/fornecedor.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private readonly API_URL = 'http://localhost:8080/fornecedor/';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.API_URL + "fornecedores");
  }

  get(f: Fornecedor): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(this.API_URL + "fornecedor/" + f.id);
  }

  inserir(f: Fornecedor): Observable<string> {
    return this.http.post(this.API_URL + "inserir", f, { responseType: "text" });
  }

  editar(f: Fornecedor): Observable<string> {
    return this.http.put(this.API_URL + "editar", f, { responseType: "text" });
  }

  remover(f: Fornecedor): Observable<string> {
    return this.http.delete(this.API_URL + "remover/" + f.id, { responseType: "text" });
  }
}
