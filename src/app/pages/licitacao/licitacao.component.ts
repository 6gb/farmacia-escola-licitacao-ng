import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { LicitacaoService } from "../../core/service/licitacao.service"
import { Licitacao } from "../../core/model/licitacao.model"

@Component({
  selector: 'app-licitacao',
  templateUrl: './licitacao.component.html',
  styleUrls: ['./licitacao.component.css']
})
export class LicitacaoComponent implements OnInit {
  licitacoes: Licitacao[] = [];

  constructor(private service: LicitacaoService ) { }

  ngOnInit(): void {
    this.getAll();
  }

  nova() {
    this.service.inserir().subscribe(() => {
      alert('Ação realizada com sucesso.');
      this.getAll();
    })
  }

  getAll(){
    this.service.getAll().subscribe(ls => {
      this.licitacoes = ls;
    });
  }

  remover(l: Licitacao): void {
    console.log(l);
    this.service.remover(l).subscribe(() => {
      alert('Ação realizada com sucesso.');
      this.getAll();
    });
  }
}
