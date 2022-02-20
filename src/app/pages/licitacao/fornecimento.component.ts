import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { LicitacaoService } from "../../core/service/licitacao.service"
import { FornecedorService } from "../../core/service/fornecedor.service"
import { EmbalagemService } from "../../core/service/embalagem.service"
import { MateriaPrimaService } from "../../core/service/materia-prima.service"
import { Licitacao } from "../../core/model/licitacao.model"
import { Fornecimento } from "../../core/model/fornecimento.model"
import { Insumo } from "../../core/model/insumo.model"
import { Embalagem } from "../../core/model/embalagem.model"
import { MateriaPrima } from "../../core/model/materia-prima.model"
import { Fornecedor } from "../../core/model/fornecedor.model"
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-fornecimento',
  templateUrl: './fornecimento.component.html',
  styleUrls: ['./fornecimento.component.css']
})
export class FornecimentoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LicitacaoService,
    private serviceF: FornecedorService,
    private serviceE: EmbalagemService,
    private serviceMP: MateriaPrimaService,
    private formBuilder: FormBuilder
  ) { }

  licitacao: Licitacao = { id:0 };
  fornecedores: Fornecedor[] = [];
  insumos: (Embalagem|MateriaPrima)[] = [];
  form = this.formBuilder.group({ });

  ngOnInit() {
    this.reset();
    this.getAll();
  }

  onSubmit() {
    console.log("Entering")
    if (this.form.valid && this.form.dirty) {
      console.log("Entered")
      let fornecedor = this.form.value.fornecedor;
      let insumo = this.form.value.insumo;
      let preco = this.form.value.preco;
      let licitacao = this.form.value.licitacao;

      this.service.inserirFornecimento(
        new Fornecimento(licitacao, fornecedor, insumo, preco)).subscribe(() => {
        alert('Ação realizada com sucesso.');
        this.reset();
        this.getAll();
      })
    } else {
      alert('Por favor, tente novamente.');
    }
  }

  reset() {
    this.serviceF.getAll().subscribe(fs => this.fornecedores = fs);
    this.serviceE.getAll().subscribe(es => this.insumos.push(...es));
    this.serviceMP.getAll().subscribe(mps => this.insumos.push(...mps));
    //this.serviceE.getAll().subscribe(es => this.embalagens = es);
    //this.serviceMP.getAll().subscribe(mps => this.materiasPrimas = mps);

    this.form = this.formBuilder.group({
      licitacao: [this.licitacao, [Validators.required]],
      fornecedor: [null, [Validators.required]],
      insumo: [null, [Validators.required]],
      preco: [null, [Validators.required, Validators.min(0)]]
    });
  }

  getAll() {
    let id
    this.route.paramMap.subscribe((pm: ParamMap) => id = pm.get('id'))

    if (id) {
      this.licitacao.id = parseInt(id)
      this.service.get(this.licitacao).subscribe(l => this.licitacao = l)
    }
  }

  remover(f: Fornecimento): void {
    this.service.removerFornecimento(f).subscribe(() => {
      alert('Ação realizada com sucesso.');
      this.getAll();
    });
  }
}
