import { GraficosComponent } from './components/graficos/graficos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosRoutes } from './components/favoritos/favoritos-routing.module';

const routes: Routes = [
  {
    path: '',
    component: GraficosComponent
  },
  ...FavoritosRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
