import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PruebasComponent } from './pruebas/pruebas.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'pruebas', component: PruebasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
