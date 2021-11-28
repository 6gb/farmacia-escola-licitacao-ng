import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-embalagem',
  templateUrl: './embalagem.component.html',
  styleUrls: ['./embalagem.component.css']
})
export class EmbalagemComponent implements OnInit {
  // Apenas para teste do front-end
  es = [{
    "descricao": "Descrição 1",
    "material": "Material 1",
    "capacidade": "111"
  }]

  fe = {
    "descricao": "",
    "material": "",
    "capacidade": ""
  }

  onSubmit(form: any) {
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
