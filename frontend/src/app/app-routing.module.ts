import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DadosComponent } from './views/dados/dados.component';
import { GraficoComponent } from './views/grafico/grafico.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
  },
  {
  path: "dados",
  component: DadosComponent
  },
  {
  path: "grafico",
  component: GraficoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
