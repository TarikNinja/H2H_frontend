import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {
  ListAnnonceNonreserverComponent
} from './components/list-annonce-nonreserver/list-annonce-nonreserver.component';
import {AnnoncesByCategorieComponent} from './components/annonces-by-categorie/annonces-by-categorie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'annonces-non-reservees', component: ListAnnonceNonreserverComponent },
  { path: 'annonces-by-categorie/:idCategorie', component: AnnoncesByCategorieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
