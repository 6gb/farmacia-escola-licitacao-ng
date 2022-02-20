import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Licitacao } from "../model/licitacao.model";
import { Fornecimento } from "../model/fornecimento.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LicitacaoService {

  private readonly API_URL = 'http://localhost:8080/licitacao/';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<Licitacao[]> {
    return this.http.get<Licitacao[]>(this.API_URL + "licitacoes");
  }

  get(l: Licitacao): Observable<Licitacao> {
    return this.http.get<Licitacao>(this.API_URL + "licitacao/" + l.id);
  }

  inserir(): Observable<string> {
    return this.http.post(this.API_URL + "inserir", "", { responseType: "text" });
  }

  remover(l: Licitacao): Observable<string> {
    return this.http.delete(this.API_URL + "remover/" + l.id, { responseType: "text" });
  }

  inserirFornecimento(f: Fornecimento): Observable<string> {
    return this.http.post(this.API_URL + "licitacao/inserirFornecimento", f, { responseType: "text" });
  }

  editarFornecimento(f: Fornecimento): Observable<string> {
    return this.http.post(this.API_URL + "licitacao/editarFornecimento", f, { responseType: "text" });
  }

  removerFornecimento(f: Fornecimento): Observable<string> {
    return this.http.delete(
      this.API_URL +
      "licitacao/removerFornecimento/" +
      [f.licitacao.id, f.fornecedor.id, f.insumo.id], { responseType: "text" }
    );
  }
}
