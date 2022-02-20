import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { MateriaPrimaService } from "../../core/service/materia-prima.service"
import { MateriaPrima } from "../../core/model/materia-prima.model"

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styleUrls: ['./materia-prima.component.css']
})
export class MateriaPrimaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service: MateriaPrimaService ) { }

  materiasPrimas: MateriaPrima[] = [];
  form = this.formBuilder.group({ });

  ngOnInit(): void {
    this.getAll();
    this.reset();
  }

  onSubmit() {
    if (this.form.valid && this.form.dirty) {
      let descricao = this.form.value.descricao;
      let cas = this.form.value.cas;
      let dcb = this.form.value.dcb;
      let dci = this.form.value.dci;
      let id = this.form.value.id;

      if (!id) {
        this.service.inserir(new MateriaPrima(0, descricao, cas, dcb, dci)).subscribe(() => {
          alert('Ação realizada com sucesso.');
          this.reset();
          this.getAll();
        })
      } else {
        this.service.editar(new MateriaPrima(id, descricao, cas, dcb, dci)).subscribe(() => {
          alert('Ação realizada com sucesso.');
          this.reset();
          this.getAll();
        })
      }
    } else {
      alert('Por favor, tente novamente.');
    }
  }

  reset(){
    this.form = this.formBuilder.group({
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      cas: [null, [Validators.required, Validators.minLength(3)]],
      dcb: [null, [Validators.required, Validators.minLength(3)]],
      dci: [null, [Validators.required, Validators.minLength(3)]],
      id: [null]
    });
  }

  getAll(){
    this.service.getAll().subscribe(mps => {
      this.materiasPrimas = mps;
    });
  }

  editar(mp: MateriaPrima): void {
    this.form = this.formBuilder.group({
      descricao: [mp.descricao, [Validators.required, Validators.minLength(3)]],
      cas: [mp.cas, [Validators.required, Validators.minLength(3)]],
      dcb: [mp.dcb, [Validators.required, Validators.minLength(3)]],
      dci: [mp.dci, [Validators.required, Validators.minLength(3)]],
      id: [mp.id]
    });
  }

  remover(mp: MateriaPrima): void {
    this.service.remover(mp).subscribe(() => {
      alert('Ação realizada com sucesso.');
      this.getAll();
    });
  }
}
