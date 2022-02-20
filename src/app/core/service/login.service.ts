import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Usuario } from "../model/usuario.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API_URL = 'http://localhost:8080/';
  private readonly USUARIO = "usuario";

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.API_URL + "login", usuario);
  }

  setUsuario(usuario: Usuario): void{
    sessionStorage.setItem(this.USUARIO, JSON.stringify(usuario));
  }

  logout(): void{
    sessionStorage.removeItem(this.USUARIO);
    this.router.navigate(["/login"]);
  }

  usuario(): Usuario{
    return JSON.parse(<string>sessionStorage.getItem(this.USUARIO));
  }
}
