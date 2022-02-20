import { Component } from '@angular/core';
import { LoginService } from './core/service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmacia-escola-licitacao-ng';

  constructor(private loginService: LoginService) { }

  logout() {
    this.loginService.logout() }
}
