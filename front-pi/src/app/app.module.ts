import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { RoupaComponent } from './views/roupa/roupa.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { VendaComponent } from './views/venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    RoupaComponent,
    PagamentoComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
