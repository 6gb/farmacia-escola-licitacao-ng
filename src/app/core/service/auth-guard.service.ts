import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router"
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const usuario = this.loginService.usuario();

    if(!usuario) {
      if(state.url.endsWith('login')) {
        return true;
      }
      this.router.navigate(['']);
    } else {
      if(state.url.endsWith('login')) {
        this.router.navigate(['licitacao']);
      }
    }

    return true;
  }
}
