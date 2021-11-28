import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-licitacao',
  templateUrl: './licitacao.component.html',
  styleUrls: ['./licitacao.component.css']
})
export class LicitacaoComponent implements OnInit {
  // Apenas para teste do front-end
  ls = [{
      "dataCriacao": "01/01/2021"
  }]

  fl = {
    "dataCriacao": ""
  }

  onSubmit(form: any) {
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
