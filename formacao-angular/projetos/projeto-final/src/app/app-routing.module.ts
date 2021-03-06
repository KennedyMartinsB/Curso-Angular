import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { ConversorRoutes } from './conversor';

export const routes: Routes = [
  { 
		path: '', 
		redirectTo: '/dashboard', 
		pathMatch: 'full' 
	},
	...DashboardRoutes,
  ...CalculadoraRoutes,
  ...ConversorRoutes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
