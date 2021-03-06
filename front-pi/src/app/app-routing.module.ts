import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './views/cliente/cliente.component';
import { PagamentoComponent } from './views/pagamento/pagamento.component';
import { RoupaComponent } from './views/roupa/roupa.component';
import { VendaComponent } from './views/relatorioVenda/venda.component';
import { FazerVendaComponent } from './views/fazer-venda/fazer-venda.component';

const routes: Routes = [
  {
    path: "cliente",
    component: ClienteComponent
  },
  {
    path: "roupa",
    component: RoupaComponent
  },
  {
    path: "pagamento",
    component: PagamentoComponent
  },
  {
    path: "venda",
    component: VendaComponent
  },
  {
    path: "fazervenda",
    component: FazerVendaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
