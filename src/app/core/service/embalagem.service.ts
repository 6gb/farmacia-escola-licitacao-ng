import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Embalagem } from "../model/embalagem.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmbalagemService {

  private readonly API_URL = 'http://localhost:8080/embalagem/';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<Embalagem[]> {
    return this.http.get<Embalagem[]>(this.API_URL + "embalagens");
  }

  get(e: Embalagem): Observable<Embalagem> {
    return this.http.get<Embalagem>(this.API_URL + "embalagem/" + e.id);
  }

  inserir(e: Embalagem): Observable<string> {
    return this.http.post(this.API_URL + "inserir", e, { responseType: "text" });
  }

  editar(e: Embalagem): Observable<string> {
    return this.http.put(this.API_URL + "editar", e, { responseType: "text" });
  }

  remover(e: Embalagem): Observable<string> {
    return this.http.delete(this.API_URL + "remover/" + e.id, { responseType: "text" });
  }
}
