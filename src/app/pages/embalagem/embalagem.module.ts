import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmbalagemRoutingModule } from "./embalagem-routing.module";
import { EmbalagemComponent } from './embalagem.component';
import { EmbalagemService } from '../../core/service/embalagem.service';

@NgModule({
  declarations: [
    EmbalagemComponent
  ],
  imports: [
    CommonModule,
    EmbalagemRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EmbalagemComponent
  ],
  providers: [
    EmbalagemService
  ]
})
export class EmbalagemModule { }
