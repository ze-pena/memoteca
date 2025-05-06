import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';
import { CustomReuseStrategy } from './custom-reuse-strategy';

const routes: Routes = [
  { path: "",
    redirectTo: "listar-pensamento",
    pathMatch: "full"
  },
  {
    path: "criar-pensamento",
    component: CriarPensamentoComponent
  },
  {
    path: "listar-pensamento",
    component: ListarPensamentoComponent,
    data: {
      reuseComponent: true,
    }
  },
  {
    path: "pensamentos/editar-pensamento/:id",
    component: EditarPensamentoComponent
  },
  {
    path: "pensamentos/excluir-pensamento/:id",
    component: ExcluirPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ],
})
export class AppRoutingModule { }
