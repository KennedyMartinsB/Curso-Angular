import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { FavoritosComponent } from "./favoritos.component";
// import { FavoritosRoutingComponent } from "./favoritos-routing.component";

export const FavoritosRoutes : Routes = [
    {
        path: 'favoritos',
        component: FavoritosComponent
    },
]

export class FavoritosRoutingModule{}


