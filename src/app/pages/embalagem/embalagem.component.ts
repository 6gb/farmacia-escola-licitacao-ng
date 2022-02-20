import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { EmbalagemService } from "../../core/service/embalagem.service"
import { Embalagem } from "../../core/model/embalagem.model"

@Component({
  selector: 'app-embalagem',
  templateUrl: './embalagem.component.html',
  styleUrls: ['./embalagem.component.css']
})
export class EmbalagemComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service: EmbalagemService ) { }

  embalagens: Embalagem[] = [];
  form = this.formBuilder.group({ });

  ngOnInit(): void {
    this.getAll();
    this.reset();
  }

  onSubmit() {
    if (this.form.valid && this.form.dirty) {
      let descricao = this.form.value.descricao;
      let material = this.form.value.material;
      let capacidade = this.form.value.capacidade;
      let id = this.form.value.id;

      if (!id) {
        this.service.inserir(new Embalagem(0, descricao, material, capacidade)).subscribe(() => {
          alert('Ação realizada com sucesso.');
          this.reset();
          this.getAll();
        })
      } else {
        this.service.editar(new Embalagem(id, descricao, material, capacidade)).subscribe(() => {
          alert('Ação realizada com sucesso.');
          this.reset();
          this.getAll();
        })
      }
    } else {
      alert('Por favor, tente novamente.');
    }
  }

  reset() {
    this.form = this.formBuilder.group({
      descricao: [null, [Validators.required, Validators.minLength(3)]],
      material: [null, [Validators.required, Validators.minLength(3)]],
      capacidade: [null, [Validators.required, Validators.min(0)]],
      id: [null]
    });
  }

  getAll(){
    this.service.getAll().subscribe(es => {
      this.embalagens = es;
    });
  }

  editar(e: Embalagem): void {
    this.form = this.formBuilder.group({
      descricao: [e.descricao, [Validators.required, Validators.minLength(3)]],
      material: [e.material, [Validators.required, Validators.minLength(3)]],
      capacidade: [e.capacidade, [Validators.required, Validators.min(0)]],
      id: [e.id]
    });
  }

  remover(e: Embalagem): void {
    this.service.remover(e).subscribe(() => {
      alert('Ação realizada com sucesso.');
      this.getAll();
    });
  }
}
