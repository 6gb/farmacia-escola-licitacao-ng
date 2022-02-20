import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginModule } from "./pages/login/login.module";
import { LicitacaoModule } from "./pages/licitacao/licitacao.module";
import { FornecedorModule } from "./pages/fornecedor/fornecedor.module";
import { EmbalagemModule } from "./pages/embalagem/embalagem.module";
import { MateriaPrimaModule } from "./pages/materia-prima/materia-prima.module";
import { LoginService } from "./core/service/login.service";
import { ErrorHandlerService } from "./core/service/error-handler.service";
import { JwtInterceptorService } from "./core/service/jwt-interceptor.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    LoginModule,
    LicitacaoModule,
    FornecedorModule,
    EmbalagemModule,
    MateriaPrimaModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
