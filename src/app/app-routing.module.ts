import { OfertaComponent } from './components/oferta/oferta.component';
import { HomeComponent } from './components/home/home.component';
import { DiversaoComponent } from './pages/diversao/diversao.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'restaurantes', component:RestaurantesComponent},
  {path:'diversao', component:DiversaoComponent},
  {path:'oferta/:id', component:OfertaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
