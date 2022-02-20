import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, Validators } from "@angular/forms";
import { LoginService } from "../../core/service/login.service";
import { Usuario } from "../../core/model/usuario.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private formBuilder: FormBuilder, private loginService: LoginService) { }

  form = this.formBuilder.group({
    nome: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
    senha: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
  });

  onSubmit() {
    if (this.form.valid) {
      let nome = this.form.value.nome;
      let senha = this.form.value.senha;

      this.loginService.login(new Usuario(nome, senha, '', '')).subscribe(u => {
        this.loginService.setUsuario(u)
        this.router.navigate(['/licitacao'])
      })
    } else {
      alert('Por favor, tente novamente.');
    }
  }

  ngOnInit(): void {
    if(this.loginService.usuario()) {
      this.router.navigate(['/licitacao'])
    }
  };
}
