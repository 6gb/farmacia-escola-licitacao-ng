import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  // Apenas para teste do front-end
  fs = [{
        "nome": "Nome 1",
        "cnpj": "CNPJ1",
        "endereco": "Endereço 1",
        "telefone": "9919119191",
        "sicaf": "SICAF1",
        "email": "email@1.com"
  }]

  ff = {
    "nome": "",
    "cnpj": "",
    "endereco": "",
    "telefone": "",
    "sicaf": "",
    "email": ""
  }

  onSubmit(form: any) {
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
