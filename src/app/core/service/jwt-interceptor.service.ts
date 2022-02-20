import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {
  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const usuario = this.loginService.usuario();

    if(usuario){
      const authReq = req.clone( { setHeaders: { 'Authorization': 'Bearer' + usuario.token } } )
      return next.handle(authReq)
    } else {
      return next.handle(req)
    }
  }
}
