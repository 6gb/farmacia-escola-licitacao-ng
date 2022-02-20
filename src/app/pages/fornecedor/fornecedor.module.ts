import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FornecedorRoutingModule } from "./fornecedor-routing.module";
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorService } from '../../core/service/fornecedor.service';

@NgModule({
  declarations: [
    FornecedorComponent
  ],
  imports: [
    CommonModule,
    FornecedorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FornecedorComponent
  ],
  providers: [
    FornecedorService
  ]
})
export class FornecedorModule { }
