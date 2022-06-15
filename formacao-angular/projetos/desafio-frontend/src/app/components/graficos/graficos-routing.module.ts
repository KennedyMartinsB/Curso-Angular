import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { GraficosComponent } from './graficos.component';
import { GraficosRoutingComponent } from "./graficos-routing.component";

export const GraficoRoutes : Routes =[
    {
        path: 'graficos',
        component: GraficosComponent    
    },
    
] 


export class GraficosRoutingModule{}