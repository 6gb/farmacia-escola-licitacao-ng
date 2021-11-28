import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styleUrls: ['./materia-prima.component.css']
})
export class MateriaPrimaComponent implements OnInit {
  // Apenas para teste do front-end
  mps = [{
      "descricao": "Descrição 1",
      "cas": "CAS 1",
      "dcb": "DCB 1",
      "dci": "DCI 1"
  }]

  fmp = {
    "descricao": "",
    "cas": "",
    "dcb": "",
    "dci": ""
  }

  onSubmit(form: any) {
    console.log(form);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
