import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Fornecimento } from "../model/fornecimento.model";
import { Licitacao } from "../model/licitacao.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FornecimentoService {

  private readonly API_URL = 'http://localhost:8080/fornecimento/';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(l: Licitacao): Observable<Fornecimento[]> {
    return this.http.get<Fornecimento[]>(this.API_URL + "fornecimentos/" + l.id);
  }

  get(f: Fornecimento): Observable<Fornecimento> {
    return this.http.get<Fornecimento>(this.API_URL + "fornecimento/" + f.id);
  }
}
