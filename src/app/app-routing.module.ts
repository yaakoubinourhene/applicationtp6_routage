import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ListproduitsComponent } from './application/listproduits/listproduits.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'produits', component:ListproduitsComponent},
  {path:'contact', component:ContactComponent},
  {path:'', redirectTo:'accueil', pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
