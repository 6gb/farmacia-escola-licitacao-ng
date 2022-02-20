import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { FornecedorService } from "../../core/service/fornecedor.service"
import { Fornecedor } from "../../core/model/fornecedor.model"

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private service: FornecedorService ) { }

  fornecedores: Fornecedor[] = [];
  form = this.formBuilder.group({ });

  ngOnInit(): void {
    this.getAll();
    this.reset();
  }

  onSubmit() {
    if (this.form.valid && this.form.dirty) {
      let cnpj = this.form.value.cnpj;
      let nome = this.form.value.nome;
      let endereco = this.form.value.endereco;
      let telefone = this.form.value.telefone;
      let email = this.form.value.email;
      let sicaf = this.form.value.sicaf;
      let id = this.form.value.id;

      if (!id) {
        this.service.inserir(new Fornecedor(0, cnpj, nome, endereco, telefone, email, sicaf)).subscribe(() => {
          alert('Ação realizada com sucesso.');
          this.reset();
          this.getAll();
        })
      } else {
        this.service.editar(new Fornecedor(id, cnpj, nome, endereco, telefone, email, sicaf)).subscribe(() => {
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
      cnpj: [null, [Validators.required, Validators.minLength(3)]],
      nome: [null, [Validators.required, Validators.minLength(3)]],
      endereco: [null, [Validators.required, Validators.minLength(3)]],
      telefone: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.minLength(3), Validators.email]],
      sicaf: [null, [Validators.required, Validators.minLength(3)]],
      id: [null]
    });
  }

  getAll(){
    this.service.getAll().subscribe(fs => {
      this.fornecedores = fs;
    });
  }

  editar(f: Fornecedor): void {
    this.form = this.formBuilder.group({
      cnpj: [f.cnpj, [Validators.required, Validators.minLength(3)]],
      nome: [f.nome, [Validators.required, Validators.minLength(3)]],
      endereco: [f.endereco, [Validators.required, Validators.minLength(3)]],
      telefone: [f.telefone, [Validators.required, Validators.minLength(3)]],
      email: [f.email, [Validators.required, Validators.minLength(3), Validators.email]],
      sicaf: [f.sicaf, [Validators.required, Validators.minLength(3)]],
      id: [f.id]
    });
  }

  remover(f: Fornecedor): void {
    this.service.remover(f).subscribe(() => {
      alert('Ação realizada com sucesso.');
      this.getAll();
    });
  }
}
