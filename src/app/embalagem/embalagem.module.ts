import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { EmbalagemComponent } from './embalagem.component';
import { EmbalagemRoutingModule } from "./embalagem-routing.module";


@NgModule({
  declarations: [
    EmbalagemComponent
  ],
  imports: [
    CommonModule,
    EmbalagemRoutingModule,
    FormsModule
  ],
  exports: [
    EmbalagemComponent
  ]
})
export class EmbalagemModule { }
