import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { MateriaPrima } from "../model/materia-prima.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MateriaPrimaService {

  private readonly API_URL = 'http://localhost:8080/materia-prima/';

  constructor(private http: HttpClient, private router: Router) { }

  getAll(): Observable<MateriaPrima[]> {
    return this.http.get<MateriaPrima[]>(this.API_URL + "materias-primas");
  }

  get(mp: MateriaPrima): Observable<MateriaPrima> {
    return this.http.get<MateriaPrima>(this.API_URL + "materia-prima/" + mp.id);
  }

  inserir(mp: MateriaPrima): Observable<string> {
    return this.http.post(this.API_URL + "inserir", mp, { responseType: "text" });
  }

  editar(mp: MateriaPrima): Observable<string> {
    return this.http.put(this.API_URL + "editar", mp, { responseType: "text" });
  }

  remover(mp: MateriaPrima): Observable<string> {
    return this.http.delete(this.API_URL + "remover/" + mp.id, { responseType: "text" });
  }
}
